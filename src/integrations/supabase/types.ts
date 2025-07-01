export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      admins: {
        Row: {
          created_at: string
          email: string
          id: string
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
        }
        Relationships: []
      }
      audit_logs: {
        Row: {
          action: string
          created_at: string
          id: string
          ip_address: string | null
          new_data: Json | null
          old_data: Json | null
          record_id: string
          table_name: string
          user_id: string | null
        }
        Insert: {
          action: string
          created_at?: string
          id?: string
          ip_address?: string | null
          new_data?: Json | null
          old_data?: Json | null
          record_id: string
          table_name: string
          user_id?: string | null
        }
        Update: {
          action?: string
          created_at?: string
          id?: string
          ip_address?: string | null
          new_data?: Json | null
          old_data?: Json | null
          record_id?: string
          table_name?: string
          user_id?: string | null
        }
        Relationships: []
      }
      contact_leads: {
        Row: {
          created_at: string
          email: string | null
          id: string
          message: string | null
          name: string
          phone: string | null
          property_id: string | null
          source: string | null
          status: string | null
        }
        Insert: {
          created_at?: string
          email?: string | null
          id?: string
          message?: string | null
          name: string
          phone?: string | null
          property_id?: string | null
          source?: string | null
          status?: string | null
        }
        Update: {
          created_at?: string
          email?: string | null
          id?: string
          message?: string | null
          name?: string
          phone?: string | null
          property_id?: string | null
          source?: string | null
          status?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "contact_leads_property_id_fkey"
            columns: ["property_id"]
            isOneToOne: false
            referencedRelation: "imoveis"
            referencedColumns: ["id"]
          },
        ]
      }
      financial_indicators: {
        Row: {
          created_at: string
          data: Json
          id: string
        }
        Insert: {
          created_at?: string
          data: Json
          id?: string
        }
        Update: {
          created_at?: string
          data?: Json
          id?: string
        }
        Relationships: []
      }
      image_uploads: {
        Row: {
          created_at: string
          file_name: string
          file_path: string
          file_size: number
          id: string
          mime_type: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          file_name: string
          file_path: string
          file_size: number
          id?: string
          mime_type: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          file_name?: string
          file_path?: string
          file_size?: number
          id?: string
          mime_type?: string
          updated_at?: string
        }
        Relationships: []
      }
      imagens_imoveis: {
        Row: {
          criado_em: string
          id: string
          imovel_id: string
          nome_arquivo: string
          url: string
        }
        Insert: {
          criado_em?: string
          id?: string
          imovel_id: string
          nome_arquivo: string
          url: string
        }
        Update: {
          criado_em?: string
          id?: string
          imovel_id?: string
          nome_arquivo?: string
          url?: string
        }
        Relationships: [
          {
            foreignKeyName: "imagens_imoveis_imovel_id_fkey"
            columns: ["imovel_id"]
            isOneToOne: false
            referencedRelation: "imoveis"
            referencedColumns: ["id"]
          },
        ]
      }
      imoveis: {
        Row: {
          accepts_exchange: boolean | null
          aceita_permuta: boolean | null
          area_construida: number | null
          area_escritorio: number | null
          area_galpao: number | null
          area_manobras_docas: number | null
          area_mezanino: number | null
          area_total: number
          area_total_empreendimento: number | null
          bairro: string | null
          caracteristicas: string | null
          cep: string | null
          characteristics: string | null
          cidade: string
          codigo_interno: string | null
          comprimento: number | null
          created_at: string
          data_atualizacao: string | null
          data_entrega: string | null
          delivery: string | null
          descricao: string | null
          distancia_br101: number | null
          distancia_itajai: number | null
          distancia_itapoa: number | null
          distancia_portonave: number | null
          docas: number | null
          down_payment: number | null
          down_payment_percentage: number | null
          entrada_percentual: number | null
          estado: string | null
          finalidade: string | null
          forma_pagamento: string | null
          fotos: Json | null
          guarita_24h: boolean | null
          id: string
          iluminacao: string | null
          infraestrutura: string | null
          infraestrutura_condominio: Json | null
          infraestrutura_detalhes: Json | null
          lado_a: number | null
          lado_b: number | null
          lado_c: number | null
          lado_d: number | null
          largura: number | null
          latitude: number | null
          localizacao: string
          longitude: number | null
          lot_size: number | null
          lote_maior: number | null
          lote_menor: number | null
          main_image_url: string | null
          matricula_numero: string | null
          nome: string
          nome_proprietario: string | null
          parcelas: number | null
          patio_manobra: boolean | null
          pe_direito: number | null
          portaria_24h: boolean | null
          preco: number | null
          price_per_meter: number | null
          quantidade_lotes: number | null
          registration_number: string | null
          rent_price: number | null
          rental_sqm_value: number | null
          rua: string | null
          sale_price: number | null
          seguranca: boolean | null
          show_on_website: boolean | null
          sinal_entrada: number | null
          sistema_seguranca: boolean | null
          staking: string | null
          status: Database["public"]["Enums"]["property_status"] | null
          tamanho_maximo_lote: number | null
          tamanho_minimo_lote: number | null
          telefone_proprietario: string | null
          tipo_cobertura: string | null
          tipo_imovel: string
          tipo_piso: string | null
          tipo_piso_mezanino: string | null
          titulo: string | null
          total_area_condominio: number | null
          total_lotes: number | null
          total_modules: number | null
          total_price: number | null
          updated_at: string
          vagas_estacionamento: number | null
          warehouse_value: number | null
        }
        Insert: {
          accepts_exchange?: boolean | null
          aceita_permuta?: boolean | null
          area_construida?: number | null
          area_escritorio?: number | null
          area_galpao?: number | null
          area_manobras_docas?: number | null
          area_mezanino?: number | null
          area_total?: number
          area_total_empreendimento?: number | null
          bairro?: string | null
          caracteristicas?: string | null
          cep?: string | null
          characteristics?: string | null
          cidade: string
          codigo_interno?: string | null
          comprimento?: number | null
          created_at?: string
          data_atualizacao?: string | null
          data_entrega?: string | null
          delivery?: string | null
          descricao?: string | null
          distancia_br101?: number | null
          distancia_itajai?: number | null
          distancia_itapoa?: number | null
          distancia_portonave?: number | null
          docas?: number | null
          down_payment?: number | null
          down_payment_percentage?: number | null
          entrada_percentual?: number | null
          estado?: string | null
          finalidade?: string | null
          forma_pagamento?: string | null
          fotos?: Json | null
          guarita_24h?: boolean | null
          id?: string
          iluminacao?: string | null
          infraestrutura?: string | null
          infraestrutura_condominio?: Json | null
          infraestrutura_detalhes?: Json | null
          lado_a?: number | null
          lado_b?: number | null
          lado_c?: number | null
          lado_d?: number | null
          largura?: number | null
          latitude?: number | null
          localizacao: string
          longitude?: number | null
          lot_size?: number | null
          lote_maior?: number | null
          lote_menor?: number | null
          main_image_url?: string | null
          matricula_numero?: string | null
          nome: string
          nome_proprietario?: string | null
          parcelas?: number | null
          patio_manobra?: boolean | null
          pe_direito?: number | null
          portaria_24h?: boolean | null
          preco?: number | null
          price_per_meter?: number | null
          quantidade_lotes?: number | null
          registration_number?: string | null
          rent_price?: number | null
          rental_sqm_value?: number | null
          rua?: string | null
          sale_price?: number | null
          seguranca?: boolean | null
          show_on_website?: boolean | null
          sinal_entrada?: number | null
          sistema_seguranca?: boolean | null
          staking?: string | null
          status?: Database["public"]["Enums"]["property_status"] | null
          tamanho_maximo_lote?: number | null
          tamanho_minimo_lote?: number | null
          telefone_proprietario?: string | null
          tipo_cobertura?: string | null
          tipo_imovel: string
          tipo_piso?: string | null
          tipo_piso_mezanino?: string | null
          titulo?: string | null
          total_area_condominio?: number | null
          total_lotes?: number | null
          total_modules?: number | null
          total_price?: number | null
          updated_at?: string
          vagas_estacionamento?: number | null
          warehouse_value?: number | null
        }
        Update: {
          accepts_exchange?: boolean | null
          aceita_permuta?: boolean | null
          area_construida?: number | null
          area_escritorio?: number | null
          area_galpao?: number | null
          area_manobras_docas?: number | null
          area_mezanino?: number | null
          area_total?: number
          area_total_empreendimento?: number | null
          bairro?: string | null
          caracteristicas?: string | null
          cep?: string | null
          characteristics?: string | null
          cidade?: string
          codigo_interno?: string | null
          comprimento?: number | null
          created_at?: string
          data_atualizacao?: string | null
          data_entrega?: string | null
          delivery?: string | null
          descricao?: string | null
          distancia_br101?: number | null
          distancia_itajai?: number | null
          distancia_itapoa?: number | null
          distancia_portonave?: number | null
          docas?: number | null
          down_payment?: number | null
          down_payment_percentage?: number | null
          entrada_percentual?: number | null
          estado?: string | null
          finalidade?: string | null
          forma_pagamento?: string | null
          fotos?: Json | null
          guarita_24h?: boolean | null
          id?: string
          iluminacao?: string | null
          infraestrutura?: string | null
          infraestrutura_condominio?: Json | null
          infraestrutura_detalhes?: Json | null
          lado_a?: number | null
          lado_b?: number | null
          lado_c?: number | null
          lado_d?: number | null
          largura?: number | null
          latitude?: number | null
          localizacao?: string
          longitude?: number | null
          lot_size?: number | null
          lote_maior?: number | null
          lote_menor?: number | null
          main_image_url?: string | null
          matricula_numero?: string | null
          nome?: string
          nome_proprietario?: string | null
          parcelas?: number | null
          patio_manobra?: boolean | null
          pe_direito?: number | null
          portaria_24h?: boolean | null
          preco?: number | null
          price_per_meter?: number | null
          quantidade_lotes?: number | null
          registration_number?: string | null
          rent_price?: number | null
          rental_sqm_value?: number | null
          rua?: string | null
          sale_price?: number | null
          seguranca?: boolean | null
          show_on_website?: boolean | null
          sinal_entrada?: number | null
          sistema_seguranca?: boolean | null
          staking?: string | null
          status?: Database["public"]["Enums"]["property_status"] | null
          tamanho_maximo_lote?: number | null
          tamanho_minimo_lote?: number | null
          telefone_proprietario?: string | null
          tipo_cobertura?: string | null
          tipo_imovel?: string
          tipo_piso?: string | null
          tipo_piso_mezanino?: string | null
          titulo?: string | null
          total_area_condominio?: number | null
          total_lotes?: number | null
          total_modules?: number | null
          total_price?: number | null
          updated_at?: string
          vagas_estacionamento?: number | null
          warehouse_value?: number | null
        }
        Relationships: []
      }
      imoveis_backup: {
        Row: {
          accepts_exchange: boolean | null
          aceita_permuta: boolean | null
          area_construida: number | null
          area_escritorio: number | null
          area_galpao: number | null
          area_manobras_docas: number | null
          area_mezanino: number | null
          area_total: number | null
          area_total_empreendimento: number | null
          bairro: string | null
          caracteristicas: string | null
          cep: string | null
          cidade: string | null
          codigo_interno: string | null
          comprimento: number | null
          created_at: string | null
          data_atualizacao: string | null
          data_entrega: string | null
          delivery: string | null
          descricao: string | null
          distancia_br101: number | null
          distancia_itajai: number | null
          distancia_itapoa: number | null
          distancia_portonave: number | null
          docas: number | null
          down_payment: number | null
          down_payment_percentage: number | null
          entrada_percentual: number | null
          estado: string | null
          finalidade: string | null
          forma_pagamento: string | null
          fotos: Json | null
          guarita_24h: boolean | null
          id: string | null
          iluminacao: string | null
          infraestrutura: string | null
          infraestrutura_condominio: Json | null
          infraestrutura_detalhes: Json | null
          lado_a: number | null
          lado_b: number | null
          lado_c: number | null
          lado_d: number | null
          largura: number | null
          latitude: number | null
          localizacao: string | null
          longitude: number | null
          lot_size: number | null
          lote_maior: number | null
          lote_menor: number | null
          matricula_numero: string | null
          nome: string | null
          nome_proprietario: string | null
          parcelas: number | null
          patio_manobra: boolean | null
          pe_direito: number | null
          portaria_24h: boolean | null
          preco: number | null
          price_per_meter: number | null
          quantidade_lotes: number | null
          registration_number: string | null
          rent_price: number | null
          rental_sqm_value: number | null
          rua: string | null
          sale_price: number | null
          search_vector: unknown | null
          seguranca: boolean | null
          sinal_entrada: number | null
          sistema_seguranca: boolean | null
          staking: string | null
          status: Database["public"]["Enums"]["property_status"] | null
          tamanho_maximo_lote: number | null
          tamanho_minimo_lote: number | null
          telefone_proprietario: string | null
          tipo_cobertura: string | null
          tipo_empreendimento: string | null
          tipo_imovel: string | null
          tipo_piso: string | null
          tipo_piso_mezanino: string | null
          titulo: string | null
          total_area: number | null
          total_area_condominio: number | null
          total_lotes: number | null
          total_modules: number | null
          total_price: number | null
          updated_at: string | null
          vagas_estacionamento: number | null
          warehouse_value: number | null
        }
        Insert: {
          accepts_exchange?: boolean | null
          aceita_permuta?: boolean | null
          area_construida?: number | null
          area_escritorio?: number | null
          area_galpao?: number | null
          area_manobras_docas?: number | null
          area_mezanino?: number | null
          area_total?: number | null
          area_total_empreendimento?: number | null
          bairro?: string | null
          caracteristicas?: string | null
          cep?: string | null
          cidade?: string | null
          codigo_interno?: string | null
          comprimento?: number | null
          created_at?: string | null
          data_atualizacao?: string | null
          data_entrega?: string | null
          delivery?: string | null
          descricao?: string | null
          distancia_br101?: number | null
          distancia_itajai?: number | null
          distancia_itapoa?: number | null
          distancia_portonave?: number | null
          docas?: number | null
          down_payment?: number | null
          down_payment_percentage?: number | null
          entrada_percentual?: number | null
          estado?: string | null
          finalidade?: string | null
          forma_pagamento?: string | null
          fotos?: Json | null
          guarita_24h?: boolean | null
          id?: string | null
          iluminacao?: string | null
          infraestrutura?: string | null
          infraestrutura_condominio?: Json | null
          infraestrutura_detalhes?: Json | null
          lado_a?: number | null
          lado_b?: number | null
          lado_c?: number | null
          lado_d?: number | null
          largura?: number | null
          latitude?: number | null
          localizacao?: string | null
          longitude?: number | null
          lot_size?: number | null
          lote_maior?: number | null
          lote_menor?: number | null
          matricula_numero?: string | null
          nome?: string | null
          nome_proprietario?: string | null
          parcelas?: number | null
          patio_manobra?: boolean | null
          pe_direito?: number | null
          portaria_24h?: boolean | null
          preco?: number | null
          price_per_meter?: number | null
          quantidade_lotes?: number | null
          registration_number?: string | null
          rent_price?: number | null
          rental_sqm_value?: number | null
          rua?: string | null
          sale_price?: number | null
          search_vector?: unknown | null
          seguranca?: boolean | null
          sinal_entrada?: number | null
          sistema_seguranca?: boolean | null
          staking?: string | null
          status?: Database["public"]["Enums"]["property_status"] | null
          tamanho_maximo_lote?: number | null
          tamanho_minimo_lote?: number | null
          telefone_proprietario?: string | null
          tipo_cobertura?: string | null
          tipo_empreendimento?: string | null
          tipo_imovel?: string | null
          tipo_piso?: string | null
          tipo_piso_mezanino?: string | null
          titulo?: string | null
          total_area?: number | null
          total_area_condominio?: number | null
          total_lotes?: number | null
          total_modules?: number | null
          total_price?: number | null
          updated_at?: string | null
          vagas_estacionamento?: number | null
          warehouse_value?: number | null
        }
        Update: {
          accepts_exchange?: boolean | null
          aceita_permuta?: boolean | null
          area_construida?: number | null
          area_escritorio?: number | null
          area_galpao?: number | null
          area_manobras_docas?: number | null
          area_mezanino?: number | null
          area_total?: number | null
          area_total_empreendimento?: number | null
          bairro?: string | null
          caracteristicas?: string | null
          cep?: string | null
          cidade?: string | null
          codigo_interno?: string | null
          comprimento?: number | null
          created_at?: string | null
          data_atualizacao?: string | null
          data_entrega?: string | null
          delivery?: string | null
          descricao?: string | null
          distancia_br101?: number | null
          distancia_itajai?: number | null
          distancia_itapoa?: number | null
          distancia_portonave?: number | null
          docas?: number | null
          down_payment?: number | null
          down_payment_percentage?: number | null
          entrada_percentual?: number | null
          estado?: string | null
          finalidade?: string | null
          forma_pagamento?: string | null
          fotos?: Json | null
          guarita_24h?: boolean | null
          id?: string | null
          iluminacao?: string | null
          infraestrutura?: string | null
          infraestrutura_condominio?: Json | null
          infraestrutura_detalhes?: Json | null
          lado_a?: number | null
          lado_b?: number | null
          lado_c?: number | null
          lado_d?: number | null
          largura?: number | null
          latitude?: number | null
          localizacao?: string | null
          longitude?: number | null
          lot_size?: number | null
          lote_maior?: number | null
          lote_menor?: number | null
          matricula_numero?: string | null
          nome?: string | null
          nome_proprietario?: string | null
          parcelas?: number | null
          patio_manobra?: boolean | null
          pe_direito?: number | null
          portaria_24h?: boolean | null
          preco?: number | null
          price_per_meter?: number | null
          quantidade_lotes?: number | null
          registration_number?: string | null
          rent_price?: number | null
          rental_sqm_value?: number | null
          rua?: string | null
          sale_price?: number | null
          search_vector?: unknown | null
          seguranca?: boolean | null
          sinal_entrada?: number | null
          sistema_seguranca?: boolean | null
          staking?: string | null
          status?: Database["public"]["Enums"]["property_status"] | null
          tamanho_maximo_lote?: number | null
          tamanho_minimo_lote?: number | null
          telefone_proprietario?: string | null
          tipo_cobertura?: string | null
          tipo_empreendimento?: string | null
          tipo_imovel?: string | null
          tipo_piso?: string | null
          tipo_piso_mezanino?: string | null
          titulo?: string | null
          total_area?: number | null
          total_area_condominio?: number | null
          total_lotes?: number | null
          total_modules?: number | null
          total_price?: number | null
          updated_at?: string | null
          vagas_estacionamento?: number | null
          warehouse_value?: number | null
        }
        Relationships: []
      }
      infraestrutura_items: {
        Row: {
          created_at: string
          descricao: string | null
          id: string
          imovel_id: string | null
          tipo: string
        }
        Insert: {
          created_at?: string
          descricao?: string | null
          id?: string
          imovel_id?: string | null
          tipo: string
        }
        Update: {
          created_at?: string
          descricao?: string | null
          id?: string
          imovel_id?: string | null
          tipo?: string
        }
        Relationships: [
          {
            foreignKeyName: "infraestrutura_items_imovel_id_fkey"
            columns: ["imovel_id"]
            isOneToOne: false
            referencedRelation: "imoveis"
            referencedColumns: ["id"]
          },
        ]
      }
      performance_metrics: {
        Row: {
          created_at: string | null
          cumulative_layout_shift: number | null
          first_contentful_paint: number | null
          first_input_delay: number | null
          id: string
          largest_contentful_paint: number | null
          page_url: string
          time_to_first_byte: number | null
          timestamp: string | null
          user_agent: string | null
        }
        Insert: {
          created_at?: string | null
          cumulative_layout_shift?: number | null
          first_contentful_paint?: number | null
          first_input_delay?: number | null
          id?: string
          largest_contentful_paint?: number | null
          page_url: string
          time_to_first_byte?: number | null
          timestamp?: string | null
          user_agent?: string | null
        }
        Update: {
          created_at?: string | null
          cumulative_layout_shift?: number | null
          first_contentful_paint?: number | null
          first_input_delay?: number | null
          id?: string
          largest_contentful_paint?: number | null
          page_url?: string
          time_to_first_byte?: number | null
          timestamp?: string | null
          user_agent?: string | null
        }
        Relationships: []
      }
      property_characteristics: {
        Row: {
          created_at: string
          id: string
          name: string
          property_id: string
          value: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          name: string
          property_id: string
          value?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          name?: string
          property_id?: string
          value?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "property_characteristics_property_id_fkey"
            columns: ["property_id"]
            isOneToOne: false
            referencedRelation: "imoveis"
            referencedColumns: ["id"]
          },
        ]
      }
      property_favorites: {
        Row: {
          created_at: string
          id: string
          property_id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          property_id: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          property_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "property_favorites_property_id_fkey"
            columns: ["property_id"]
            isOneToOne: false
            referencedRelation: "imoveis"
            referencedColumns: ["id"]
          },
        ]
      }
      property_image_variants: {
        Row: {
          created_at: string
          height: number | null
          id: string
          original_url: string
          property_id: string | null
          size_bytes: number | null
          thumbnail_url: string
          webp_url: string | null
          width: number | null
        }
        Insert: {
          created_at?: string
          height?: number | null
          id?: string
          original_url: string
          property_id?: string | null
          size_bytes?: number | null
          thumbnail_url: string
          webp_url?: string | null
          width?: number | null
        }
        Update: {
          created_at?: string
          height?: number | null
          id?: string
          original_url?: string
          property_id?: string | null
          size_bytes?: number | null
          thumbnail_url?: string
          webp_url?: string | null
          width?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "property_image_variants_property_id_fkey"
            columns: ["property_id"]
            isOneToOne: false
            referencedRelation: "imoveis"
            referencedColumns: ["id"]
          },
        ]
      }
      property_views: {
        Row: {
          id: string
          ip_address: string | null
          property_id: string
          user_agent: string | null
          viewed_at: string
          viewer_id: string | null
        }
        Insert: {
          id?: string
          ip_address?: string | null
          property_id: string
          user_agent?: string | null
          viewed_at?: string
          viewer_id?: string | null
        }
        Update: {
          id?: string
          ip_address?: string | null
          property_id?: string
          user_agent?: string | null
          viewed_at?: string
          viewer_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "property_views_property_id_fkey"
            columns: ["property_id"]
            isOneToOne: false
            referencedRelation: "imoveis"
            referencedColumns: ["id"]
          },
        ]
      }
      terrenos: {
        Row: {
          acesso_via_principal: boolean | null
          area_total_empreendimento: number | null
          created_at: string | null
          id: string
          imovel_id: string | null
          permite_desmembramento: boolean | null
          quantidade_lotes: number | null
          tamanho_maximo_lote: number | null
          tamanho_minimo_lote: number | null
          updated_at: string | null
          zonas_permitidas: string[] | null
        }
        Insert: {
          acesso_via_principal?: boolean | null
          area_total_empreendimento?: number | null
          created_at?: string | null
          id?: string
          imovel_id?: string | null
          permite_desmembramento?: boolean | null
          quantidade_lotes?: number | null
          tamanho_maximo_lote?: number | null
          tamanho_minimo_lote?: number | null
          updated_at?: string | null
          zonas_permitidas?: string[] | null
        }
        Update: {
          acesso_via_principal?: boolean | null
          area_total_empreendimento?: number | null
          created_at?: string | null
          id?: string
          imovel_id?: string | null
          permite_desmembramento?: boolean | null
          quantidade_lotes?: number | null
          tamanho_maximo_lote?: number | null
          tamanho_minimo_lote?: number | null
          updated_at?: string | null
          zonas_permitidas?: string[] | null
        }
        Relationships: [
          {
            foreignKeyName: "terrenos_imovel_id_fkey"
            columns: ["imovel_id"]
            isOneToOne: false
            referencedRelation: "imoveis"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      cleanup_invalid_images: {
        Args: Record<PropertyKey, never>
        Returns: {
          property_id: string
          removed_count: number
          remaining_count: number
        }[]
      }
    }
    Enums: {
      commercial_type: "escritorio" | "loja" | "galpao"
      property_status: "disponível" | "vendido" | "alugado" | "reservado"
      property_type: "residencial" | "comercial" | "industrial" | "terreno"
      user_type: "admin" | "corretor" | "cliente"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      commercial_type: ["escritorio", "loja", "galpao"],
      property_status: ["disponível", "vendido", "alugado", "reservado"],
      property_type: ["residencial", "comercial", "industrial", "terreno"],
      user_type: ["admin", "corretor", "cliente"],
    },
  },
} as const
