--
-- PostgreSQL database dump
--

-- Dumped from database version 12.6 (Ubuntu 12.6-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.6 (Ubuntu 12.6-0ubuntu0.20.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: alembic_version; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.alembic_version (
    version_num character varying(32) NOT NULL
);


--
-- Name: students; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.students (
    id integer NOT NULL,
    grade integer,
    first_name character varying,
    last_name character varying
);


--
-- Name: students_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.students_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: students_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.students_id_seq OWNED BY public.students.id;


--
-- Name: students id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.students ALTER COLUMN id SET DEFAULT nextval('public.students_id_seq'::regclass);


--
-- Data for Name: alembic_version; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.alembic_version (version_num) FROM stdin;
a761ec950bbe
\.


--
-- Data for Name: students; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.students (id, grade, first_name, last_name) FROM stdin;
60	12	Jeffrey	Perez
61	12	Michael	Jackson
62	12	Arnie	Johnson
63	12	Pablo	Johnson
64	12	Gina	Higgins
65	12	Hugh	Tyler
66	12	Miguel	Curry
67	12	Darrin	Maldonado
68	12	Tyler	Pierce
69	12	Kent	Martinez
70	11	Lucy	Parsons
71	11	Brent	Lawson
72	11	Boyd	Larson
73	11	Edna	Castro
74	11	Dave	Simmons
75	11	Evan	Benson
76	11	Rickey	Taylor
77	11	Lloyd	Ward
78	11	Ebony	Garner
79	11	Rogelio	Lyons
80	10	Rhonda	Crawford
81	10	Alfonso	Simon
82	10	Travis	Alvarez
83	10	Irving	Ellis
84	10	Calvin	Jefferson
85	10	Lynda	Freeman
86	10	Pasty	Morris
87	10	Thomas	Coleman
88	10	Marion	Torres
89	10	Thelma	Cunningham
90	9	Nettie	Matthews
91	9	Alyssa	Mckenzie
92	9	Michael	Warren
93	9	Geneva	Burns
94	9	Carolyn	Gordon
95	9	Dexter	Massey
96	9	Brent	Brady
97	9	Steve	Nunez
98	9	Johnnie	Shaw
99	9	Kendra	Romero
100	9	Jackson	Hayes
\.


--
-- Name: students_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.students_id_seq', 100, true);


--
-- Name: alembic_version alembic_version_pkc; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.alembic_version
    ADD CONSTRAINT alembic_version_pkc PRIMARY KEY (version_num);


--
-- Name: students students_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.students
    ADD CONSTRAINT students_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

