/**
 * 
 */
package mx.tec.web.vo;

import java.util.Calendar;

/**
 * @author Cesar
 *
 */
public class ToReadVO {

	private String id;
    private String userId; 
    private String mangaId;
    private Calendar dateAdded;   
    
	/**
	 * 
	 */
	public ToReadVO() {
	}

	/**
	 * @param id
	 * @param userId
	 * @param mangaId
	 * @param dateAdded
	 */
	public ToReadVO(String id, String userId, String mangaId, Calendar dateAdded) {
		this.id = id;
		this.userId = userId;
		this.mangaId = mangaId;
		this.dateAdded = dateAdded;
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
	 * @return the userId
	 */
	public String getUserId() {
		return userId;
	}

	/**
	 * @param userId the userId to set
	 */
	public void setUserId(String userId) {
		this.userId = userId;
	}

	/**
	 * @return the mangaId
	 */
	public String getMangaId() {
		return mangaId;
	}

	/**
	 * @param mangaId the mangaId to set
	 */
	public void setMangaId(String mangaId) {
		this.mangaId = mangaId;
	}

	/**
	 * @return the dateAdded
	 */
	public Calendar getDateAdded() {
		return dateAdded;
	}

	/**
	 * @param dateAdded the dateAdded to set
	 */
	public void setDateAdded(Calendar dateAdded) {
		this.dateAdded = dateAdded;
	}

}
