package dev.sanda.users_and_posts.model;

import dev.sanda.apifi.annotations.ElementCollectionApi;
import dev.sanda.apifi.annotations.MapElementCollectionApi;
import dev.sanda.apifi.generator.entity.ElementCollectionEndpointType;
import dev.sanda.datafi.persistence.IdFactory;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;
import java.util.Map;
import java.util.Set;

import static dev.sanda.apifi.generator.entity.ElementCollectionEndpointType.*;
import static dev.sanda.apifi.generator.entity.MapElementCollectionEndpointType.*;
import static javax.persistence.EnumType.STRING;

@Entity
@Getter @Setter
@EqualsAndHashCode(exclude = {"user", "comments"})
public class Post {
    @Id
    private Long id = IdFactory.getNextId();
    @ManyToOne
    private User user;
    @OneToMany(mappedBy = "post")
    private Set<Comment> comments;
    @ElementCollection @Enumerated(STRING)
    @ElementCollectionApi(endpoints = {
            ADD_TO,
            REMOVE__FROM,
            PAGINATED__BATCH_,
            PAGINATED__FREE__TEXT_SEARCH
    })
    private List<Reaction> reactions;

    @ElementCollection
    @CollectionTable(name = "tags")
    @MapKeyColumn(name = "tag")
    @Column(name = "count")
    @MapElementCollectionApi(endpoints = {
            PUT_ALL,
            REMOVE_ALL,
            PAGINATED__BATCH__,
            PAGINATED__FREE__TEXT__SEARCH
    })
    private Map<Tag, Integer> tagCount;

    @Column(length = 5000)
    private String content;
}
