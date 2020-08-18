package dev.sanda.users_and_posts.model;

import dev.sanda.datafi.persistence.IdFactory;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Set;

@Entity
@Getter @Setter
@EqualsAndHashCode(exclude = {"user", "post"})
public class Comment {
    @Id
    private Long id = IdFactory.getNextId();
    @ManyToOne
    private Comment inReplyTo;
    @OneToMany
    private Set<Comment> replies;
    @ManyToOne
    private User user;
    @ManyToOne
    private Post post;
    @Column(length = 5000)
    private String content;
}
