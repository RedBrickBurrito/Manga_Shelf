/**
 * 
 */
package mx.tec.web.controller;

import java.lang.StackWalker.Option;
import java.util.List;
import java.util.Optional;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import mx.tec.web.vo.MangaVO;
import mx.tec.web.manager.MangaManager;

/**
 * @author Cesar
 *
 */
@RestController
@RequestMapping("/api")
public class MangaController {
	private static final String MANGA_WITH_ID_NOT_FOUND = "[Controller]: Manga with id {} not found";
	private static final Logger log = LoggerFactory.getLogger(MangaController.class);

	/** A reference to the Manga Manager */
	@Resource
	private MangaManager mangaManager;
	
	/**
	 * The end point for GET {url}/mangas
	 * @return a json list of all the mangas
	 */
	@GetMapping("/mangas")
	public ResponseEntity<List<MangaVO>> getMangas() {
		log.debug("[Controller]: Getting all the mangas");
		List<MangaVO> mangas = mangaManager.getMangas();

		return new ResponseEntity<>(mangas, HttpStatus.OK);
	}
	
	/**
	 * The end point for GET {url}/mangas/{id}
	 * @param id Manga id
	 * @return a json containing the manga info and status 200 if the manga is found or status 204 if the manga is not found
	 */
	@GetMapping("/mangas/{id}")
	public ResponseEntity<MangaVO> getProduct(@PathVariable(value = "id") long id) {
		ResponseEntity<MangaVO> responseEntity = new ResponseEntity<>(HttpStatus.NO_CONTENT);

		Optional<MangaVO> manga = mangaManager.getManga(id);

		if (manga.isPresent()) {
			responseEntity = new ResponseEntity<>(manga.get(), HttpStatus.OK);
		}

		return responseEntity;
	}
}
