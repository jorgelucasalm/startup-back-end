create schema petcare;
use petcare;

create table pet(
	id int NOT NULL AUTO_INCREMENT,
	cpf_responsavel varchar(11) NOT NULL,
	nome varchar(30) NOT NULL,
	raca varchar(30) NOT NULL,
	peso decimal(4,2),
	idade tinyint,
	tipo_sanguineo varchar(30),
    primary key(id)
)ENGINE=InnoDB;

create table responsavel(
	nome varchar(30) NOT NULL,
	nick varchar(15) NOT NULL,
	cpf varchar(11) NOT NULL,
	endereco text(50) NOT NULL,
	telefone varchar(9) NOT NULL,
	email varchar(35) NOT NULL,
	senha varchar(15) NOT NULL,
	email_recuperacao varchar(35) NOT NULL,
    primary key (cpf)
)ENGINE=InnoDB;

create table nova_consulta(
	id int NOT NULL AUTO_INCREMENT,
	id_pet int NOT NULL,
	categoria varchar(15) NOT NULL,
	data date NOT NULL,
	turno varchar(10) NOT NULL, 
	tratamento_continuo boolean NOT NULL,
	nome_medico varchar(50),
	autorizacao boolean, 
	motivacao text,
	numero_dose tinyint, 
	uso_medicacao boolean,
	medicacao varchar(30),
	termino date,
	tipo_exame varchar(30),
    primary key (id)
)ENGINE=InnoDB;

create table requisicoes(
	status varchar(15),
    id_requisicao int NOT NULL AUTO_INCREMENT, 
    primary key (id_requisicao)
)ENGINE=InnoDB;

alter table pet
add foreign key (cpf_responsavel) references responsavel(cpf)
on delete cascade 
  on update cascade;

#alter table responsavel
#add foreign key (id_pet) references pet(id) 
#	on delete cascade 
#    on update cascade;

alter table nova_consulta
add foreign key (id_pet) references pet(id) 
	on delete cascade 
	on update cascade;

alter table requisicoes
add foreign key (id_requisicao) references nova_consulta(id)
    on delete cascade
    on update cascade