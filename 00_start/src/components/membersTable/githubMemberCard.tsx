import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import { MemberEntity } from '../../model/member';

interface Props {
    member : MemberEntity;
    styleCard: React.CSSProperties;
}

const cardStyle = (props : Props) : React.CSSProperties => ({
    ...props.styleCard,
    display: 'flex',
    flexDirection: 'row',
})

const cardImageStyle = () : React.CSSProperties => ({
    width: 151,
})

const cardDetailsStyle = () : React.CSSProperties => ({
    display: 'flex',
    flexDirection: 'column',
})

export const GithubMemberCard = (props : Props) =>
    <Card style={cardStyle(props)}>
        <CardMedia 
            component="img"
            image={props.member.avatar_url}
            style={cardImageStyle()}
            title="GitHub avatar"
        />
        <div style={cardDetailsStyle()}>
            <Typography component="h5" variant="h5">
                {props.member.login}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
                {props.member.id}
            </Typography>
        </div>
    </Card>
