PGDMP      0                |            quiz    16.3    16.2     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    17211    quiz    DATABASE     x   CREATE DATABASE quiz WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Mexico.1252';
    DROP DATABASE quiz;
                adminn    false            �            1259    17238    score    TABLE     V   CREATE TABLE public.score (
    id integer NOT NULL,
    promedio double precision
);
    DROP TABLE public.score;
       public         heap    adminn    false            �            1259    17237    promedios_id_seq    SEQUENCE     �   CREATE SEQUENCE public.promedios_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.promedios_id_seq;
       public          adminn    false    218            �           0    0    promedios_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.promedios_id_seq OWNED BY public.score.id;
          public          adminn    false    217            �            1259    17245    question    TABLE     M   CREATE TABLE public.question (
    id integer NOT NULL,
    pregunta text
);
    DROP TABLE public.question;
       public         heap    adminn    false            �            1259    17244    question_id_seq    SEQUENCE     �   CREATE SEQUENCE public.question_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.question_id_seq;
       public          adminn    false    220            �           0    0    question_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.question_id_seq OWNED BY public.question.id;
          public          adminn    false    219            �            1259    17222 	   reference    TABLE     P   CREATE TABLE public.reference (
    id integer NOT NULL,
    referencia text
);
    DROP TABLE public.reference;
       public         heap    adminn    false            �            1259    17221    referencias_id_seq    SEQUENCE     �   CREATE SEQUENCE public.referencias_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.referencias_id_seq;
       public          adminn    false    216            �           0    0    referencias_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.referencias_id_seq OWNED BY public.reference.id;
          public          adminn    false    215            &           2604    17248    question id    DEFAULT     j   ALTER TABLE ONLY public.question ALTER COLUMN id SET DEFAULT nextval('public.question_id_seq'::regclass);
 :   ALTER TABLE public.question ALTER COLUMN id DROP DEFAULT;
       public          adminn    false    219    220    220            $           2604    17225    reference id    DEFAULT     n   ALTER TABLE ONLY public.reference ALTER COLUMN id SET DEFAULT nextval('public.referencias_id_seq'::regclass);
 ;   ALTER TABLE public.reference ALTER COLUMN id DROP DEFAULT;
       public          adminn    false    215    216    216            %           2604    17241    score id    DEFAULT     h   ALTER TABLE ONLY public.score ALTER COLUMN id SET DEFAULT nextval('public.promedios_id_seq'::regclass);
 7   ALTER TABLE public.score ALTER COLUMN id DROP DEFAULT;
       public          adminn    false    218    217    218            �          0    17245    question 
   TABLE DATA           0   COPY public.question (id, pregunta) FROM stdin;
    public          adminn    false    220   ;       �          0    17222 	   reference 
   TABLE DATA           3   COPY public.reference (id, referencia) FROM stdin;
    public          adminn    false    216   �       �          0    17238    score 
   TABLE DATA           -   COPY public.score (id, promedio) FROM stdin;
    public          adminn    false    218          �           0    0    promedios_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.promedios_id_seq', 17, true);
          public          adminn    false    217            �           0    0    question_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.question_id_seq', 10, true);
          public          adminn    false    219            �           0    0    referencias_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.referencias_id_seq', 5, true);
          public          adminn    false    215            *           2606    17243    score promedios_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.score
    ADD CONSTRAINT promedios_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.score DROP CONSTRAINT promedios_pkey;
       public            adminn    false    218            ,           2606    17252    question question_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.question
    ADD CONSTRAINT question_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.question DROP CONSTRAINT question_pkey;
       public            adminn    false    220            (           2606    17229    reference referencias_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.reference
    ADD CONSTRAINT referencias_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.reference DROP CONSTRAINT referencias_pkey;
       public            adminn    false    216            �   �  x�m��R�0���SlC��BHHsP��L�4��g����dy��I��T<@f�7�I����՝Nҿ�~��V_$V\ITRڲO���@��ƕJA	_R'$�"�.5Z/��tt�>9�J�3�z�q\�N,	�JB綮d*�Qr�r�>���fܡ���:����?>X��m�JR)8�)ޮ�3{I�P�}��&�Xs0���g!��c�$��sq�?��>f��d�����(�(��#ߡd��:�J�,_q0{�LAj�t2I�kǢIb2)��J��w��q�z���e��*�(n�#�K����Z�KB�%u�c��ƱAnZ/�����t�w�p[��;Qs��p���b��-�T�J��0�0�ʐu�6�w 0ґ�Z/i+|;�� ݚ����{I��C�K��wy$��D��I�qxdz���Q�����Ò��������qP�vK7<L���5"��z���j=����u�Fx���)~j9�B6�-TR�(Q��c��J�;?a:���lg�H�f�������9�P��	@��F�T�	�_i�;^g�?�ϣȔZk��ʍ��,g���a�q���o��*)3"�X L�r=\Z���3�SO���ͫb{��歔����=�#�+����W�����uQr�J      �   ;  x����N�@F����[�5iLU�I���5&�g萹�ah�ަ�>���۝����u�~����w�>�K��9Wy~ĕ?hL�GG��}���(�#C<��8�KY�V���[+���6E�W8�AJꪶ�T��L�@?j�qmt���y9�	:0����-#�8tL�cE��i	��wᬘ&�}Kf��(�ff������F���.X��'͢�?��5�����h�ƾ,���{��Hԣ~�}������������i6�'�:Xk]B�a�5�+lD���i��B��<�E؏嬣��b�O�S�� /�_�q�?�b��      �   )   x���47�24� ����@��6�&`�L��dc���� �mx     