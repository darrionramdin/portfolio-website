import React from 'react';

const Post = ({title, description, link}) => {
	return (
		<div className="fl w-100 w-50-ns mv3">
            <a href={link} className="link ttu fw5 white
            bb b--yellow dim">{title}
            </a>
            <p className="mt2 mb0 gray f6">{description}</p>
        </div>
	)
}

export default Post;