/**
 * 
 */
package mx.tec.web.vo;

import java.util.Calendar;

/**
 * @author Scyruz
 *
 */
public class MangaVO {

	private String id;
	private String title;
	private String author;
	private Calendar publicationDate;
	
	/**
	 * 
	 */
	public MangaVO() {
	}
	
	/**
	 * @param id
	 * @param title
	 * @param author
	 * @param publicationDate
	 */
	public MangaVO(String id, String title, String author, Calendar publicationDate) {
		this.id = id;
		this.title = title;
		this.author = author;
		this.publicationDate = publicationDate;
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
