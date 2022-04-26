import styled from '@emotion/styled';
import dogProfile from '../assets/dog-profile.PNG';

const ServiceRow = styled.div`
    max-width: var(--column-width);
    margin-top: 1em;
    display: flex;
    flex-direction: row;
    align-content: flex-start;
    justify-content: flex-start;
`;

const ServiceItem = styled.section`
    margin: 0 1em;
    width: 22em;
    text-align: justify;
    display: flex;
    flex-direction: column;
    min-height: 37em;

    &:first-child {
        margin-left: 0;
    }
    &:last-child {
        padding-right: 0.25em;
    }
    & img {
        border-radius: 5px;
        border: 0.3px solid #bfbfbf;
    }
`;

const SizedBox = styled.div`
    width: 90vw;
    max-width: 22em;
`;
const Column = styled.div`
    display: flex;
    flex-direction: column;
`;
const Price = styled.p`
    font-size: 1.4rem;
    font-weight: 800;
    margin: 0;
`;
const Price2 = styled(Price)`
    padding: 0 0 0 2.7em;
    margin: 0;
`;

const Services = ({ services }) => {
    const onDefaultProfile = (e) => {
        e.target.src = dogProfile;
    }

    return (
        <ServiceRow>
            {services.map(service => (
                <Column>
                    <ServiceItem key={service.uid}>
                        <img src={service.photo} alt="service" onError={onDefaultProfile} />

                        <SizedBox>
                            <h3>{service.title}</h3>
                            {service.notes.map(note => (
                                <p>{note}</p>
                            ))}
                        </SizedBox>
                    </ServiceItem>
                    {service.price && <Price>Cost: {service.price}</Price>}
                    {service.price2 && <Price2>      {service.price2}</Price2>}
                    {service.price3 && <Price2>      {service.price3}</Price2>}
                </Column>
            ))}
        </ServiceRow>
    );
}

export default Services;