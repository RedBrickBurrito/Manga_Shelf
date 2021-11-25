package mx.tec.web.mapper;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.annotation.Resource;

import org.modelmapper.ModelMapper;

import org.springframework.stereotype.Component;

import mx.tec.web.entity.Manga;
import mx.tec.web.vo.MangaVO;

/**
 * Mapper for Objects
 */
@Component
public class Mapper {
    /** Reference to the Model Mapper */
    @Resource
    private ModelMapper modelMapper;

    /**
     * Convert from Manga Entity to Manga Value Object
     * @param manga Manga Entity to convert
     * @return  Manga Value Object conversion
     */
    public MangaVO convertMangaToVO(final Manga manga) {
        return modelMapper.map(manga, MangaVO.class);
    }

    /**
     * Convert from Manga Value Object to Manga Entity
     * @param mangaVO Manga Value Object to convert
     * @return Manga Entity conversion
     */
    public Manga convertMangaToEntity(final MangaVO mangaVO) {
        return modelMapper.map(mangaVO, Manga.class);
    }

    /**
     * Convert from Optional Manga Entity to Optional Manga Value Object
     * @param manga Manga Entity Optional to convert
     * @return Optional Manga Value Object conversion
     */
    public Optional<MangaVO> convertMangaToOptionalVO(final Optional<Manga> manga) {
        Optional<MangaVO> mangaVO = Optional.empty();

        if (manga.isPresent()) {
            mangaVO = Optional.of(convertMangaToVO(manga.get()));
        }

        return mangaVO;
    }
    
    /**
     * Convert from Manga Entity List to Manga Value Object List
     * @param mangas Manga Entity List to convert
     * @return Manga Value Object List conversion
     */
    public List<MangaVO> convertMangaToVOList(final List<Manga> mangas) {
        final List<MangaVO> mangaVOs = new ArrayList<>();

        for (final Manga manga : mangas) {
            mangaVOs.add(convertMangaToVO(manga));
        }

        return mangaVOs;
    }
}
