package mx.tec.web.manager;

import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional; 
import mx.tec.web.vo.MangaVO; 
import org.slf4j.LoggerFactory;
import org.slf4j.Logger;

import javax.annotation.Resource;

import mx.tec.web.dao.DAO;

/**
* @author eddy
*
 */

@Service
public class MangaManager {
    private static final Logger LOG = LoggerFactory.getLogger(MangaManager.class);

    @Resource
    private DAO mangaShelfDAO;

    private List<MangaVO> mangas;

    public List<MangaVO> getMangas() {
        LOG.info("get all mangas available");
        return mangaShelfDAO.findAll();
    }

    public Optional<MangaVO> getManga(final long id) {
		LOG.info("get mangas with id: {}", id);
        return mangaShelfDAO.findById(id);
	}

    public Optional<MangaVO> addMangas(final MangaVO newManga) {
		LOG.info("add a new manga: {}", newManga);
		return mangaShelfDAO.insert(newManga);
	}

    public Optional<MangaVO> deleteManga(final MangaVO existingManga) {
        LOG.info("delete an existing manga by manga: {}", existingManga);
        mangaShelfDAO.remove(existingManga);
	} 

}