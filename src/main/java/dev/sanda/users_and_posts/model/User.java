package dev.sanda.users_and_posts.model;

import dev.sanda.apifi.annotations.EntityCollectionApi;
import dev.sanda.apifi.annotations.WithCRUDEndpoints;
import dev.sanda.datafi.persistence.Archivable;
import dev.sanda.datafi.persistence.IdFactory;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.HashSet;
import java.util.Set;

import static dev.sanda.apifi.generator.entity.CRUDEndpoints.*;
import static dev.sanda.apifi.generator.entity.EntityCollectionEndpointType.*;


@Entity
@Getter @Setter
@EqualsAndHashCode(exclude = "posts")
@WithCRUDEndpoints({
        GET_PAGINATED_BATCH,
        GET_TOTAL_COUNT,
        GET_BY_ID,
        GET_BATCH_BY_IDS,
        CREATE,
        BATCH_CREATE,
        UPDATE,
        BATCH_UPDATE,
        DELETE,
        BATCH_DELETE,
        ARCHIVE,
        BATCH_ARCHIVE,
        DE_ARCHIVE,
        BATCH_DE_ARCHIVE,
        GET_ARCHIVED_PAGINATED_BATCH,
        GET_TOTAL_ARCHIVED_COUNT
})
public class User implements Archivable {
    @Id
    private Long id = IdFactory.getNextId();
    private Boolean isArchived = false;
    private String name;
    private String username;
    private String phoneNumber;
    @OneToMany(mappedBy = "user")
    @EntityCollectionApi(endpoints = {
            ASSOCIATE_WITH,
            REMOVE_FROM,
            UPDATE_IN,
            GET_PAGINATED__BATCH,
            PAGINATED__FREE_TEXT_SEARCH},
    freeTextSearchFields = "content")
    private Set<Post> posts;
}
