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
public class Review {

    /** Review id */
	@Id
	@GeneratedValue
	private long id;

    /** Review userId */    
	private String userId;

    /** Review mangaId */
	private String mangaId;

    /** Review description */
	private String description;

    /** Review rate */
    private Float rate;

    /** Review date */
    private Calendar date;
    
	/**
	 * No arguments constructor
	 */
	public Review() {
	}

	/**
     * Constructor including all the properties
	 * @param id
	 * @param userId
	 * @param mangaId
	 * @param description
	 * @param rate
	 * @param date
	 */
	public Review(final long id, String userId, String mangaId, String description, Float rate, Calendar date) {
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

