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
public class Manga {

	/** Manga id */
	@Id
	@GeneratedValue
	private long id;

	/** Manga title */
	private String title;

	/** Manga author */
	private String author;

	/** Manga publicationDate */
	private Calendar publicationDate;
	
	/**
	 * No arguments constructor
	 */
	public Manga() {
	}
	
	/**
	 * Constructor including all the properties
	 * @param id
	 * @param title
	 * @param author
	 * @param publicationDate
	 */

	public Manga(final long id, String title, String author, Calendar publicationDate) {
		this.id = id;
		this.title = title;
		this.author = author;
		this.publicationDate = publicationDate;
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
	 * @return the title
	 */
	public String getTitle() {
		return title;
	}

	/**
	 * @param title the title to set
	 */
	public void setTitle(String title) {
		this.title = title;
	}

	/**
	 * @return the author
	 */
	public String getAuthor() {
		return author;
	}

	/**
	 * @param author the author to set
	 */
	public void setAuthor(String author) {
		this.author = author;
	}

	/**
	 * @return the publicationDate
	 */
	public Calendar getPublicationDate() {
		return publicationDate;
	}

	/**
	 * @param publicationDate the publicationDate to set
	 */
	public void setPublicationDate(Calendar publicationDate) {
		this.publicationDate = publicationDate;
	}

}
