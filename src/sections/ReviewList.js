import styled from '@emotion/styled';
import dogProfile from '../assets/dog-profile.PNG';

const ReviewRow = styled.div`
    max-width: var(--column-width);
    margin-top: 1em;
    margin-bottom: 1em;
    display: flex;
    flex-direction: row;
    align-content: flex-start;
    justify-content: flex-start;
`;
const ReviewItem = styled.section`
    margin: 0 2.5em 0 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    text-align: justify;

    &:last-child {
        margin: 0;
    }

    & img {        
        width: 8em;
        height: 8em;
        border-radius: 50%;
        border: 0.5px solid #bfbfbf;
    }

    & h3 {
        font-size: 1.2em;
        margin: 1em 0 0.5em 0;
        text-align: center;
    }
    & p {
        font-size: 1em;
    }
`;

const SizedBox = styled.div`
    width: 20em;
`;

const ReviewList = ({ items }) => {
    const onDefaultProfile = (e) => {
        e.target.src = dogProfile;
    }

    return (
        <ReviewRow>
            {items.map(member => (
                <ReviewItem key={member.uid}>
                    <img src={member.photo} alt="profile" onError={onDefaultProfile} />
                    <SizedBox>
                        <h3>{member.name}</h3>
                        {member.notes.map(note => (
                            <p>{note}</p>
                        ))}
                    </SizedBox>
                </ReviewItem>
            ))}
        </ReviewRow>
    );
}

export default ReviewList;