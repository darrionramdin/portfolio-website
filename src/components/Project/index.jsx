import React from 'react';

const Project = ({name, description, demoLink, codeLink, languages}) => {
    return (
        <div className="fl w-100 w-50-ns mv3">
            <a href={demoLink} className="link ttu fw5 white
            bb b--yellow dim">{name}
            </a>
            <p className="mt2 mb0 gray f6">{description}</p>
            <p className="white f6 fw3 o-20 mt1 mb2">{languages}</p>
            <a className="link f7 fw3 white o-20" href={codeLink}>View Code</a>
        </div>
    )
}
 
export default Project;