create schema startups;

use startups;

create table startup (
id_startup INT (10) not null,
nome_startup VARCHAR(50),
cidade_sede VARCHAR(50),
PRIMARY KEY (id_startup)
);

create table linguagem_Programacao(
id_linguagem INT,
nome_linguagem VARCHAR(50),
ano_lancamento INT(4),
PRIMARY KEY (id_linguagem)
);

create table programador(
id_programador INT,
id_startup INT,
nome_programador VARCHAR(50),
genero CHAR(1),
data_nascimento DATE NOT NULL,
email VARCHAR(50) NOT NULL UNIQUE,
PRIMARY KEY (id_programador) 
);

create table programador_linguagem(
id_programador INT NOT NULL,
id_linguagem INT NOT NULL
);

ALTER TABLE programador_linguagem 
ADD FOREIGN KEY (id_programador) 
REFERENCES programador (id_programador) 
ON DELETE CASCADE;

ALTER TABLE programador_linguagem 
ADD FOREIGN KEY (id_linguagem) 
REFERENCES linguagem_Programacao(id_linguagem);

ALTER TABLE programador 
ADD FOREIGN KEY (id_startup) 
REFERENCES startup(id_startup) ON UPDATE CASCADE;

INSERT INTO startup (id_startup, nome_startup, cidade_sede) 
values (10001, "Tech4Toy", "Porto Alegre"),
(10002, "Smart123", "Belo Horizonte"),
(10003, "knowledgeUp", "Rio de Janeiro"),
(10004, "BSI Next Level", "Recife"),
(10005, "QualiHealth", "São Paulo"),
(10006, "ProEdu", "Florianópolis");

INSERT INTO programador (id_programador, id_startup, nome_programador, genero, data_nascimento, email) 
values (30001, 10001, "João Pedro", "M", "1993-06-23", "joaop@mail.com"),
(30002, 10002, "Paula Silva", "F", "1986-01-10", "paulas@mail.com"),
(30003, 10003, "Renata Vieira", "F", "1991-07-05", "renatav@mail.com"),
(30004, 10004, "Felipe Santos", "M", "1976-11-25", "felipes@mail.com"),
(30005, 10001, "Ana Cristina", "F", "1968-02-19", "anac@mail.com"),
(30006, 10004, "Alexandre Alves", "M", "1988-07-07", "alexandrea@mail.com"),
(30007, 10002, "Laura Marques", "F", "1987-10-04", "lauram@mail.com");

INSERT INTO linguagem_Programacao (id_linguagem, nome_linguagem, ano_lancamento) 
values (20001, "Python", 1991),
(20002, "PHP", 1995),
(20003, "Java", 1995),
(20004, "C", 1972),
(20005, "JavaScript", 1995),
(20006, "Dart", 2011);

INSERT INTO programador_linguagem (id_programador, id_linguagem) 
values (30001, 20001),
(30001, 20002),
(30002, 20003),
(30003, 20004),
(30003, 20005),
(30004, 20005),
(30007, 20001),
(30007, 20002);




