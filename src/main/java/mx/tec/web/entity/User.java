/**
 * 
 */
package mx.tec.web.entity;

import java.io.Serializable;
import java.util.List;
import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import java.util.Calendar;

/**
 * @author Scyruz
 *
 */
public class User {

	/** User id */
	@Id
	@GeneratedValue
	private long id;

	/** User username */
	private String username;

    /** User password */
	private String password;

    /** User email */
    private Calendar email;
    
	/**
	 * No arguments constructor
	 */
	public User() {
	}

	/**
    * Constructor including all the properties
	 * @param id
	 * @param username
	 * @param password
	 * @param email
	 */
	public User(final long id, String username, String password, Calendar email) {
		this.id = id;
		this.username = username;
		this.password = password;
		this.email = email;
	}

	/**
	 * @return the id
	 */
	public long getId() {
		return id;
	}

	/**
	 * @param id the id to set
	 */
	public void setId(final long id) {
		this.id = id;
	}

	/**
	 * @return the username
	 */
	public String getUsername() {
		return username;
	}

	/**
	 * @param username the username to set
	 */
	public void setUsername(String username) {
		this.username = username;
	}

	/**
	 * @return the password
	 */
	public String getPassword() {
		return password;
	}

	/**
	 * @param password the password to set
	 */
	public void setPassword(String password) {
		this.password = password;
	}

	/**
	 * @return the email
	 */
	public Calendar getEmail() {
		return email;
	}

	/**
	 * @param email the email to set
	 */
	public void setEmail(Calendar email) {
		this.email = email;
	}

}
