-- Secure RLS for admins table: restrict access to admin users only
-- 1) Create a SECURITY DEFINER function to check admin status without causing RLS recursion
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.admins a
    WHERE a.email = (SELECT auth.email())
  );
$$;

-- 2) Ensure RLS is enabled and replace the permissive policy
ALTER TABLE public.admins ENABLE ROW LEVEL SECURITY;

-- Drop old overly-permissive policy if it exists
DROP POLICY IF EXISTS "Admins podem ver seus próprios dados" ON public.admins;

-- Allow only admins to view rows in admins table
CREATE POLICY "Only admins can view admins"
ON public.admins
FOR SELECT
USING (public.is_admin());