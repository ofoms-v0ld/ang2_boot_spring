package com.example.domain;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.hibernate.annotations.GenericGenerator;

@Entity
public class ISchedule implements Serializable{

	private static final long serialVersionUID = 1L;
	
	@Id
	@GenericGenerator(name="ischedule" , strategy="increment")
	@GeneratedValue(generator="ischedule")
	int id;
	@Column(name="title")
	String title;
	@Column(name="description")
	String description;
	@Temporal(TemporalType.TIMESTAMP)
	@Column(name="timestart")
	Date timestart;
	@Temporal(TemporalType.TIMESTAMP)
	@Column(name="timeend")
	Date timeend;
	@Column(name="location")
	String location;
	@Column(name="type")
	String type;
	@Column(name="status")
	String status;
	@Temporal(TemporalType.TIMESTAMP)
	@Column(name="datecreated")
	Date datecreated;
	@Temporal(TemporalType.TIMESTAMP)
	@Column(name="dateupdated")
	Date dateupdated;
	@Column(name="creator")
	String creator;
	@Column(name="creatorid")
	Integer creatorid;
	@Column(name="attendees")
	String attendees;

	public ISchedule() {
		super();
		// TODO Auto-generated constructor stub
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Date getTimestart() {
		return timestart;
	}

	public void setTimestart(Date timestart) {
		this.timestart = timestart;
	}

	public Date getTimeend() {
		return timeend;
	}

	public void setTimeend(Date timeend) {
		this.timeend = timeend;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public Date getDatecreated() {
		return datecreated;
	}

	public void setDatecreated(Date datecreated) {
		this.datecreated = datecreated;
	}

	public Date getDateupdated() {
		return dateupdated;
	}

	public void setDateupdated(Date dateupdated) {
		this.dateupdated = dateupdated;
	}

	public String getCreator() {
		return creator;
	}

	public void setCreator(String creator) {
		this.creator = creator;
	}

	public Integer getCreatorid() {
		return creatorid;
	}

	public void setCreatorid(Integer creatorid) {
		this.creatorid = creatorid;
	}

	public String getAttendees() {
		return attendees;
	}

	public void setAttendees(String attendees) {
		this.attendees = attendees;
	}

	

}
