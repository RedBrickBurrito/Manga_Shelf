/**
 * 
 */
package mx.tec.web.vo;

import java.util.Calendar;

/**
 * @author Scyruz
 *
 */
public class ReviewVO {

	private String id;
	private String userId;
	private String mangaId;
	private String description;
    private Float rate;
    private Calendar date;
    
	/**
	 * 
	 */
	public ReviewVO() {
	}

	/**
	 * @param id
	 * @param userId
	 * @param mangaId
	 * @param description
	 * @param rate
	 * @param date
	 */
	public ReviewVO(String id, String userId, String mangaId, String description, Float rate, Calendar date) {
		this.id = id;
		this.userId = userId;
		this.mangaId = mangaId;
		this.description = description;
		this.rate = rate;
		this.date = date;
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
	 * @return the description
	 */
	public String getDescription() {
		return description;
	}

	/**
	 * @param description the description to set
	 */
	public void setDescription(String description) {
		this.description = description;
	}

	/**
	 * @return the rate
	 */
	public Float getRate() {
		return rate;
	}

	/**
	 * @param rate the rate to set
	 */
	public void setRate(Float rate) {
		this.rate = rate;
	}

	/**
	 * @return the date
	 */
	public Calendar getDate() {
		return date;
	}

	/**
	 * @param date the date to set
	 */
	public void setDate(Calendar date) {
		this.date = date;
	}

}
