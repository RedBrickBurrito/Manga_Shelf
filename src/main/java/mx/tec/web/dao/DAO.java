package mx.tec.web.dao;

import java.util.List;
import java.util.Optional;

import javax.annotation.Resource;

import org.springframework.stereotype.Component;

import mx.tec.web.repository.MangaShelfRepository;
import mx.tec.web.mapper.Mapper;


/**
 * JPA Implementation for Data Access Object
 */
@Component("jpa")
public class DAO {
    /** A reference to the Repository */
    @Resource
    private MangaShelfRepository repository;

    /** A reference to the Product Mapper */
    @Resource
    private Mapper mapper;
}