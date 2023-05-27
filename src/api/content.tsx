import * as React from 'react';


// @ts-ignore
export default function Content({gallery, chat, moodring}) {
    const [active, setActive] = React.useState(false);

    function toggle() {
        setActive(!active);
    }

    const activeClass = active ? 'active' : 'inactive';


    return (
        <div className={activeClass} onClick={toggle}>
            <div className="summary">

            </div>
            <div className="folding-pannel answer">
                {`answer`}
            </div>
        </div>
    );
}