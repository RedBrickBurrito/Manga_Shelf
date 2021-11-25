/**
 * 
 */
package mx.tec.web.vo;

import java.util.Calendar;

/**
 * @author Scyruz
 *
 */
public class UserVO {

	private String id;
	private String username;
	private String password;
    private Calendar email;
    
	/**
	 * 
	 */
	public UserVO() {
	}

	/**
	 * @param id
	 * @param username
	 * @param password
	 * @param email
	 */
	public UserVO(String id, String username, String password, Calendar email) {
		this.id = id;
		this.username = username;
		this.password = password;
		this.email = email;
	}

	/**
	 * @return the id
	 */
	public String getId() {
		return id;
	}

	/**
	 * @param id the id to set
	 */
	public void setId(String id) {
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
