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

      
create table ischedule(
      id int not null primary key,
      title varchar_ignorecase(50),
      description varchar_ignorecase(250),
      timestart TIMESTAMP,
      timeend TIMESTAMP,
      location varchar_ignorecase(50),
      type varchar_ignorecase(50),
      status varchar_ignorecase(50),
      datecreated TIMESTAMP,
      dateupdated TIMESTAMP,
      creator varchar_ignorecase(50),
      creatorid int,
      attendees varchar_ignorecase(50));


      create table ischeduledetails(
      id int not null primary key,
      title varchar_ignorecase(50),
      description varchar_ignorecase(250),
      timestart TIMESTAMP,
      timeend TIMESTAMP,
      location varchar_ignorecase(50),
      type varchar_ignorecase(50),
      status varchar_ignorecase(50),
      datecreated TIMESTAMP,
      dateupdated TIMESTAMP,
      creator varchar_ignorecase(50),
      creatorid int,
      attendees varchar_ignorecase(50),
      statuses varchar_ignorecase(50),
      types varchar_ignorecase(50));

      
      
      