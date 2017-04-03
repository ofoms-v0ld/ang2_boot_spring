INSERT INTO book(id,name,author,price) VALUES (1,'Spring In Action:Covers Spring 3.0','Craig Walls', 400);
INSERT INTO book(id,name,author,price) VALUES (2,'Spring Batch In Action','Arnaud Cogoluegnes', 500);
INSERT INTO book(id,name,author,price) VALUES (3,'Spring Book','Rod', 300);
INSERT INTO book(id,name,author,price) VALUES (4,'Java Book','test', 100);
INSERT INTO book(id,name,author,price) VALUES (5,'Spring Boot Application','test', 200);
INSERT INTO book(id,name,author,price) VALUES (6,'Learn Spring Data JPA','test', 300);
INSERT INTO book(id,name,author,price) VALUES (7,'Hibernat in Action','Gavin King', 300);
INSERT INTO book(id,name,author,price) VALUES (8,'JSF in Action','Kit', 400);
INSERT INTO book(id,name,author,price) VALUES (9,'Java Interview Questions','Subramanian', 450);
INSERT INTO book(id,name,author,price) VALUES (10,'Java Complete Reference','Herbert', 450);


INSERT INTO iuser(id,name,avatar,profession,schedulescreated) VALUES (1,'Spring In Action:Covers Spring 3.0','Craig Walls','Walls', 400);
INSERT INTO iuser(id,name,avatar,profession,schedulescreated) VALUES (2,'Spring Batch In Action','Arnaud Cogoluegnes','Walls', 500);
INSERT INTO iuser(id,name,avatar,profession,schedulescreated) VALUES (3,'Spring Book','Rod','Walls', 300);
INSERT INTO iuser(id,name,avatar,profession,schedulescreated) VALUES (4,'Java Book','test','Walls', 100);
INSERT INTO iuser(id,name,avatar,profession,schedulescreated) VALUES (5,'Spring Boot Application','test','Walls', 200);
INSERT INTO iuser(id,name,avatar,profession,schedulescreated) VALUES (6,'Learn Spring Data JPA','test','Walls', 300);
INSERT INTO iuser(id,name,avatar,profession,schedulescreated) VALUES (7,'Hibernat in Action','Gavin King','Walls', 300);
INSERT INTO iuser(id,name,avatar,profession,schedulescreated) VALUES (8,'JSF in Action','Kit','Walls', 400);
INSERT INTO iuser(id,name,avatar,profession,schedulescreated) VALUES (9,'Java Interview Questions','Subramanian','Walls', 450);
INSERT INTO iuser(id,name,avatar,profession,schedulescreated) VALUES (10,'Java Complete Reference','Herbert','Walls', 450);

INSERT INTO ischedule(id,title,description,timestart,timeend,location,type,status,datecreated,dateupdated,creator,creatorid,attendees)
VALUES (1,'Spring Book','Rod',parsedatetime('17-09-2012', 'dd-MM-yyyy'), parsedatetime('17-09-2012', 'dd-MM-yyyy'),'Novosibirsk','type','status',parsedatetime('17-09-2012', 'dd-MM-yyyy'),parsedatetime('17-09-2012', 'dd-MM-yyyy'),'Pylypiv',2,'1');
INSERT INTO ischedule(id,title,description,timestart,timeend,location,type,status,datecreated,dateupdated,creator,creatorid,attendees)
VALUES (2,'Spring Book','Rod',parsedatetime('17-09-2012', 'dd-MM-yyyy'), parsedatetime('17-09-2012', 'dd-MM-yyyy'),'Novosibirsk','type','status',parsedatetime('17-09-2012', 'dd-MM-yyyy'),parsedatetime('17-09-2012', 'dd-MM-yyyy'),'Pylypiv',3,'1');
INSERT INTO ischedule(id,title,description,timestart,timeend,location,type,status,datecreated,dateupdated,creator,creatorid,attendees)
VALUES (3,'Spring Book','Rod',parsedatetime('17-09-2012', 'dd-MM-yyyy'), parsedatetime('17-09-2012', 'dd-MM-yyyy'),'Novosibirsk','type','status',parsedatetime('17-09-2012', 'dd-MM-yyyy'),parsedatetime('17-09-2012', 'dd-MM-yyyy'),'Pylypiv',4,'1');
INSERT INTO ischedule(id,title,description,timestart,timeend,location,type,status,datecreated,dateupdated,creator,creatorid,attendees)
VALUES (4,'Spring Book','Rod',parsedatetime('17-09-2012', 'dd-MM-yyyy'), parsedatetime('17-09-2012', 'dd-MM-yyyy'),'Novosibirsk','type','status',parsedatetime('17-09-2012', 'dd-MM-yyyy'),parsedatetime('17-09-2012', 'dd-MM-yyyy'),'Pylypiv',2,'1');
INSERT INTO ischedule(id,title,description,timestart,timeend,location,type,status,datecreated,dateupdated,creator,creatorid,attendees)
VALUES (5,'Spring Book','Rod',parsedatetime('17-09-2012', 'dd-MM-yyyy'), parsedatetime('17-09-2012', 'dd-MM-yyyy'),'Novosibirsk','type','status',parsedatetime('17-09-2012', 'dd-MM-yyyy'),parsedatetime('17-09-2012', 'dd-MM-yyyy'),'Pylypiv',3,'1');
INSERT INTO ischedule(id,title,description,timestart,timeend,location,type,status,datecreated,dateupdated,creator,creatorid,attendees)
VALUES (6,'Spring Book','Rod',parsedatetime('17-09-2012', 'dd-MM-yyyy'), parsedatetime('17-09-2012', 'dd-MM-yyyy'),'Novosibirsk','type','status',parsedatetime('17-09-2012', 'dd-MM-yyyy'),parsedatetime('17-09-2012', 'dd-MM-yyyy'),'Pylypiv',3,'1');
INSERT INTO ischedule(id,title,description,timestart,timeend,location,type,status,datecreated,dateupdated,creator,creatorid,attendees)
VALUES (7,'Spring Book','Rod',parsedatetime('17-09-2012', 'dd-MM-yyyy'), parsedatetime('17-09-2012', 'dd-MM-yyyy'),'Novosibirsk','type','status',parsedatetime('17-09-2012', 'dd-MM-yyyy'),parsedatetime('17-09-2012', 'dd-MM-yyyy'),'Pylypiv',5,'1');
INSERT INTO ischedule(id,title,description,timestart,timeend,location,type,status,datecreated,dateupdated,creator,creatorid,attendees)
VALUES (8,'Spring Book','Rod',parsedatetime('17-09-2012', 'dd-MM-yyyy'), parsedatetime('17-09-2012', 'dd-MM-yyyy'),'Novosibirsk','type','status',parsedatetime('17-09-2012', 'dd-MM-yyyy'),parsedatetime('17-09-2012', 'dd-MM-yyyy'),'Pylypiv',5,'1');


INSERT INTO ischeduledetails(id,title,description,timestart,timeend,location,type,status,datecreated,dateupdated,creator,creatorid,attendees,statuses,types)
VALUES (1,'Spring Book','Rod',parsedatetime('17-09-2012', 'dd-MM-yyyy'), parsedatetime('17-09-2012', 'dd-MM-yyyy'),'Novosibirsk','type','status',parsedatetime('17-09-2012', 'dd-MM-yyyy'),parsedatetime('17-09-2012', 'dd-MM-yyyy'),'Pylypiv',2,'1','2','3');
INSERT INTO ischeduledetails(id,title,description,timestart,timeend,location,type,status,datecreated,dateupdated,creator,creatorid,attendees,statuses,types)
VALUES (2,'Spring Book','Rod',parsedatetime('17-09-2012', 'dd-MM-yyyy'), parsedatetime('17-09-2012', 'dd-MM-yyyy'),'Novosibirsk','type','status',parsedatetime('17-09-2012', 'dd-MM-yyyy'),parsedatetime('17-09-2012', 'dd-MM-yyyy'),'Pylypiv',3,'1','2','3');
INSERT INTO ischeduledetails(id,title,description,timestart,timeend,location,type,status,datecreated,dateupdated,creator,creatorid,attendees,statuses,types)
VALUES (3,'Spring Book','Rod',parsedatetime('17-09-2012', 'dd-MM-yyyy'), parsedatetime('17-09-2012', 'dd-MM-yyyy'),'Novosibirsk','type','status',parsedatetime('17-09-2012', 'dd-MM-yyyy'),parsedatetime('17-09-2012', 'dd-MM-yyyy'),'Pylypiv',3,'1','2','3');
INSERT INTO ischeduledetails(id,title,description,timestart,timeend,location,type,status,datecreated,dateupdated,creator,creatorid,attendees,statuses,types)
VALUES (4,'Spring Book','Rod',parsedatetime('17-09-2012', 'dd-MM-yyyy'), parsedatetime('17-09-2012', 'dd-MM-yyyy'),'Novosibirsk','type','status',parsedatetime('17-09-2012', 'dd-MM-yyyy'),parsedatetime('17-09-2012', 'dd-MM-yyyy'),'Pylypiv',5,'1','2','3');
INSERT INTO ischeduledetails(id,title,description,timestart,timeend,location,type,status,datecreated,dateupdated,creator,creatorid,attendees,statuses,types)
VALUES (5,'Spring Book','Rod',parsedatetime('17-09-2012', 'dd-MM-yyyy'), parsedatetime('17-09-2012', 'dd-MM-yyyy'),'Novosibirsk','type','status',parsedatetime('17-09-2012', 'dd-MM-yyyy'),parsedatetime('17-09-2012', 'dd-MM-yyyy'),'Pylypiv',4,'1','2','3');