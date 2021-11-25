/*
 * Repository
 * Version 1.0
 * November 24, 2021 
 * Copyright 2021 Tecnologico de Monterrey
 */
package mx.tec.web.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import mx.tec.web.entity.Manga;

/**
 * Product JPA Repository
 * @author eddy
  */
@Repository
public interface MangaShelfRepository extends JpaRepository<Manga, Long> {
    
}
