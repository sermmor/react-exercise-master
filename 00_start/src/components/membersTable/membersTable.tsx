import * as React from 'react';
import {} from 'core-js';
import { MemberEntity } from '../../model/member';
import { memberAPI } from '../../api/memberAPI';
import { GithubMemberCard } from './githubMemberCard';

interface Props {
}

interface State {
  members: Array<MemberEntity>,
  nameOrganization: string,
}

const cardListStyle = () : React.CSSProperties => ({
  display: 'grid',
  gridColumnStart: 1,
  gridColumnEnd: 3,
  gridTemplateColumns: 'auto auto auto',
})

const cardStyle = () : React.CSSProperties => ({
  width: 400,
  margin: 10,
})

export class MembersTableComponent extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    
    this.state = { members: [], nameOrganization: 'lemoncode'};
  }

  loadMembers = () => {
    memberAPI.getAllMembers(this.state.nameOrganization).then((members) =>
      this.setState({ members: members })
    );
  }

  setOrganizationName = (e : React.ChangeEvent<HTMLInputElement>) => {
    this.setState({nameOrganization: e.target.value});
  }

  public render() {

    return (
      <div className="row">
        <h2> Members Page</h2>
        <input type="text" 
          value={this.state.nameOrganization} 
          onChange={this.setOrganizationName}/>
        <button onClick={this.loadMembers}>Load</button>
        <div style={cardListStyle()}>
          {
            this.state.members.map((member: MemberEntity) =>
                <GithubMemberCard member={member} styleCard={cardStyle()}/>
            )
          }
        </div>
      </div>
    );
  }
}
