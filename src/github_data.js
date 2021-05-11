/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import $ from 'jQuery';

class UserGithub extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
      username: '',
      githubtUrl: '',
      avatarUrl: '',
      blogurl: '',
      id: '',
      locate: '',
      followers: '',
      public_repos: '',
      }
    }
    componentDidMount() {
    $.get(this.props.source, (result) => {
    console.log(result);
    const data = result;
    if (data) {
    this.setState({
    username: data.name,
    githubtUrl: data.html_url,
    avatarUrl: data.avatar_url,
    blogurl: data.blog,
    id: data.id,
    locate: data.location,
    followers: data.followers,
    public_repos: data.public_repos,
    });
    }
    });
    }
    render() {
      return (
         <div>
         <img src={this.state.avatarUrl} /><br/>
         <h3>user name:{this.state.username}</h3>
         <a href={this.state.githubtUrl}>Github Link</a>
         <h3>location:{this.state.locate}</h3>
         <h3>public_repos:{this.state.public_repos}</h3>
         <h3>followers:{this.state.followers}</h3>
         <h3>id:{this.state.id}</h3>
         </div>
      );
    }
   }
//    ReactDOM.render(
//     <UserGithub source="https://api.github.com/users/cjwu" />,
//     document.getElementById('root')
//    );
   export default UserGithub;