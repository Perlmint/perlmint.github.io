import React from 'react';

import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faInstagram, faKeybase, faLinkedin, faSteam, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { find } from 'lodash';

const icons = [faGithub, faLinkedin, faInstagram, faTwitter, faKeybase, faSteam];
library.add(...icons);

export interface ILink {
    icon: string;
    url: string;
    text: string;
}

export default function Links({ links }: { links: ILink[] }) {
    return <List component='nav'>
        {links.map((link, idx) =>
            <a key={idx} href={link.url} target='_blank'>
                <ListItem button>
                    <ListItemIcon>
                        <FontAwesomeIcon icon={find(icons, (i) => i.iconName === link.icon)} />
                    </ListItemIcon>
                    <ListItemText inset primary={link.text} />
                </ListItem>
            </a>
        )}
    </List>;
}
