-- ---
-- Globals
-- ---

-- No need for SQL_MODE and FOREIGN_KEY_CHECKS in PostgreSQL

-- ---
-- Table 'user_forms'
-- tabela de usuarios da arquitetura tutores
-- ---

DROP TABLE IF EXISTS user_forms;

CREATE TABLE user_forms (
  id SERIAL PRIMARY KEY,
  social_name VARCHAR(50) NULL,
  email VARCHAR(50) NULL,
  first_name VARCHAR(50) NULL,
  last_name VARCHAR(50) NULL,
  cellphone INTEGER NULL
);

-- ---
-- Table 'general_forms'
-- Tabela de formulario geral da arquitetura formularios
-- ---

DROP TABLE IF EXISTS general_forms;

CREATE TABLE general_forms (
  id SERIAL PRIMARY KEY,
  date_of_birth VARCHAR(50) NULL,
  gender VARCHAR(30) NULL,
  education VARCHAR(30) NULL,
  type_of_housing VARCHAR(30) NULL,
  family_constitution VARCHAR(50) NULL,
  income DECIMAL NULL,
  live_in_the_house INTEGER NULL,
  address VARCHAR(30) NULL,
  choice_of_form VARCHAR(30) NULL,
  id_users INTEGER NULL REFERENCES user_forms(id)
);

-- ---
-- Table 'have_forms'
-- Tabela de quem tem cao da arquitetura formularios
-- ---

DROP TABLE IF EXISTS have_forms;

CREATE TABLE have_forms (
  id SERIAL PRIMARY KEY,
  time_with_dog VARCHAR(30) NULL,
  first_dog VARCHAR(10) NULL,
  other_pets VARCHAR(10) NULL,
  dogs_age VARCHAR(10) NULL,
  breed VARCHAR(10) NULL,
  where_get VARCHAR(30) NULL,
  paid_to_acquire VARCHAR(5) NULL,
  age_reached VARCHAR(30) NULL,
  dog_personality TEXT NULL,
  why_do_have VARCHAR(100) NULL,
  others VARCHAR(50) NULL,
  characteristics VARCHAR(50) NULL,
  decision VARCHAR(30) NULL,
  couldnt_keep VARCHAR(30) NULL,
  how_vet VARCHAR(10) NULL,
  say_about VARCHAR(50) NULL,
  id_users INTEGER NULL REFERENCES user_forms(id)
);

-- ---
-- Table 'dog_forms_have'
-- tabela para preencher dados do cachorro na arquitetura formularios
-- ---

DROP TABLE IF EXISTS dog_forms_have;

CREATE TABLE dog_forms_have (
  id SERIAL PRIMARY KEY,
  dog_name VARCHAR(30) NULL,
  gender VARCHAR(30) NULL,
  castrated VARCHAR(30) NULL,
  belongs_to_you INTEGER NULL,
  id_have_forms INTEGER NULL REFERENCES have_forms(id)
);

-- ---
-- Table 'had_forms'
-- Tabela de quem teve cao da arquitetura formularios
-- ---

DROP TABLE IF EXISTS had_forms;

CREATE TABLE had_forms (
  id SERIAL PRIMARY KEY,
  dogs_name VARCHAR(30) NULL,
  dogs_personality VARCHAR(30) NULL,
  time_with_you INTEGER NULL,
  first_dog VARCHAR(30) NULL,
  other_pets VARCHAR(30) NULL,
  pet_age INTEGER NULL,
  castrated VARCHAR(30) NULL,
  breed VARCHAR(30) NULL,
  where_came_from VARCHAR(30) NULL,
  pet_price VARCHAR(30) NULL,
  why VARCHAR(30) NULL,
  characteristics VARCHAR(30) NULL,
  name_decision VARCHAR(30) NULL,
  most_like VARCHAR(30) NULL,
  dont_like VARCHAR(30) NULL,
  veterinary VARCHAR(30) NULL,
  stopped_living VARCHAR(30) NULL,
  belonged_to_you VARCHAR(30) NULL,
  id_users INTEGER NULL REFERENCES user_forms(id)
);

-- ---
-- Table 'want_forms'
-- Tabela de quem quer ter cao da arquitetura formularios
-- ---

DROP TABLE IF EXISTS want_forms;

CREATE TABLE want_forms (
  id SERIAL PRIMARY KEY,
  characteristics VARCHAR(100) NULL,
  live_with_dog VARCHAR(30) NULL,
  nickname VARCHAR(30) NULL,
  pretend VARCHAR(30) NULL,
  include VARCHAR(30) NULL,
  what_personality VARCHAR(30) NULL,
  research_expenses VARCHAR(30) NULL,
  id_users INTEGER NULL REFERENCES user_forms(id)
);

-- ---
-- Table 'null_forms'
-- Tabela de quem nao quer ter cao da arquitetura formularios
-- ---

DROP TABLE IF EXISTS null_forms;

CREATE TABLE null_forms (
  id SERIAL PRIMARY KEY,
  dont_want VARCHAR(100) NULL,
  id_users INTEGER NULL REFERENCES user_forms(id)
);

-- ---
-- Table 'dog_forms_want'
-- Tabela para receber os dados do cachorro da arquitetura formularios
-- ---

DROP TABLE IF EXISTS dog_forms_want;

CREATE TABLE dog_forms_want (
  id SERIAL PRIMARY KEY,
  dog_size VARCHAR(30) NULL,
  coat VARCHAR(30) NULL,
  color_preference VARCHAR(30) NULL,
  gender VARCHAR(30) NULL,
  age INTEGER NULL,
  breed VARCHAR(30) NULL,
  id_want_forms INTEGER NULL REFERENCES want_forms(id)
);

-- ---
-- Table 'all_dogs'
-- Tabela para agregar informações de todos os cachorros, reais e fictícios, associados aos usuários
-- ---

DROP TABLE IF EXISTS all_dogs;

CREATE TABLE all_dogs (
  id SERIAL PRIMARY KEY,
  dog_name VARCHAR(30) NULL,
  gender VARCHAR(30) NULL,
  breed VARCHAR(30) NULL,
  age INTEGER NULL,
  real_or_fictitious VARCHAR(10) CHECK (real_or_fictitious IN ('real', 'fictitious')),
  id_users INTEGER NULL REFERENCES user_forms(id)
);
