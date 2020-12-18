create table entries(
	id int not null auto_increment,
	title varchar (255) not null,
	summary varchar (500) not null,
	content mediumtext not null,
	author_id int not null,
	entry_date date not null,
	keyword1_id int not null,
	keyword2_id int,
	keyword3_id int,
	primary key (id),
	foreign key (author_id) references authors(id),
	foreign key(keyword1_id) references keywords(id),
	foreign key(keyword2_id) references keywords(id),
	foreign key(keyword3_id) references keywords(id)
);

create table authors(
	id int not null auto_increment,
	name varchar (255) not null,
	bio varchar (500) not null,
	primary key (id)
);

create table keywords(
	id int not null auto_increment,
	title varchar (255) not null,
	primary key(id)
);

insert into keywords (title)
values ("Seasonal"),
		("Movement"),
        ("In the kitchen"),
        ("Traveling"),
        ("Mental health"),
        ("Thinking about");

insert into authors (name , bio)
values ("Monica Zhazil", "Baking, yoga, painting and reading");