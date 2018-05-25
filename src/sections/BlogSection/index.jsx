import React, { Component } from 'react';

import Section from '../../components/Section';
import Title from '../../components/Title';
import Container from '../../components/Layout/Container';

import Post from '../../components/Post';

import {posts} from '../../services/posts';

class BlogSection extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
        this.setState({
            posts
        })
    }

    render(){
        let postList = null;
        this.state.posts ? postList = this.state.posts.map((post, index) => {
            return <Post key={index} title={post.title} description={post.description} link={post.link} />
        }) : postList = <div>Loading....</div>
        return (
            <Section dark>
                <Container>
                    <div className="tc tl-ns ph2-ns pt6-ns">
                        <Title>Latest Posts</Title>
                        <div className="cf">
                            {postList}
                        </div>
                    </div>
                    <div className="tc mt5">
                        <a className="link fw5 white bb b--yellow" href="https://medium.com/@darrion">See More on Medium</a>
                    </div>
                </Container>
            </Section>
        )
    }
    
}
 
export default BlogSection;