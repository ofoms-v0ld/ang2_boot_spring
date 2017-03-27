create table book(
      id int not null primary key,
      name varchar_ignorecase(50) not null,
      author varchar_ignorecase(50) not null,
      price int);
      
      
create table iuser(
      id int not null primary key,
      name varchar_ignorecase(50) not null,
      avatar varchar_ignorecase(50) not null,
      profession varchar_ignorecase(50) not null,
      schedulescreated int);
