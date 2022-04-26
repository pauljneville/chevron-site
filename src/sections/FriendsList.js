import styled from '@emotion/styled';
import dogProfile from '../assets/dog-profile.PNG';

const FriendRow = styled.div`
    max-width: 40em;
    margin-top: 1em;
    margin-bottom: 1em;
    display: flex;
    flex-direction: row;
    align-content: flex-start;
    justify-content: flex-start;
`;

const FriendItem = styled.section`
    margin: 0 2em 0 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    & h3 {
        font-size: 1.2em;
        margin: 1em 0 0.5em 0;
        text-align: center;
    }
    & p {
        font-size: 1em;
        margin: 0;
    }
    &:last-child {
        margin: 0;
    }
`;
const Photo = styled.img`
    width: 5em;
    height: 5em;
    border-radius: 50%;
    border: .5px solid #bfbfbf;
`;

const SizedBox = styled.div`
    width: 7em;
`;

const Badge = styled.img`
    width: 3em;
    height: 3em;
    position: relative;
    top: -36px;
    left: 7px;
    z-index: 0;
`;
const ZeroSpace = styled.div`
    width: 0;
    height: 0;
`;

const FriendList = ({ friends }) => {
    const onDefaultProfile = (e) => {
        e.target.src = dogProfile;
    }

    return (
        <FriendRow>
            {friends.map(friend => (
                <FriendItem key={friend.uid}>
                    <Photo src={friend.photo} alt="profile" onError={onDefaultProfile} />
                    <ZeroSpace><Badge src={friend.badge} alt="badge" /></ZeroSpace>
                    <SizedBox>
                        <h3>{friend.name}</h3>
                        <p>{friend.description}</p>
                    </SizedBox>
                </FriendItem>
            ))}
        </FriendRow>
    );
}

export default FriendList;