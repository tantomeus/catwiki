"use click";
import { styled } from "styled-components";
import Heading from "./Headings"

const List = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6rem;
    list-style-type: none;
    margin-top: 2rem;
`;

const ListItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;

    &::before {
        content: "";
        margin-bottom: 4rem;
        display: block;
        height: 1.2rem;
        width: 1.2rem;
        border-radius: 50%;
        background-color: var(--color-grey-2);
    }
`;

export default function ListOfReasons() {
    return <List>
    <ListItem>
        <Heading color="var(--color-grey-2)" as="h2" variation="secondary">Cats can bathe themselves</Heading>
        <p>Cats are clean pretty much 100 percent of the time. That means you never have to take the time out of your day to perform the somewhat painstaking task of washing and grooming your cat.</p>
    </ListItem>
    <ListItem>
        <Heading color="var(--color-grey-2)" as="h2" variation="secondary">Cats will keep your house and yard rodent-free</Heading>
        <p>If you are not a fan of rats, chipmunk, voles or mice in your home, owning a cat will take care of that right away. Your cat may even bring you its prize to make you proud!</p>
    </ListItem>
    <ListItem>
        <Heading color="var(--color-grey-2)" as="h2" variation="secondary">Cats are low-maintenance and independent</Heading>
        <p>If you think you do not have the time or energy to own a pet, then a cat could be perfect for you. Taking care of a cat requires less responsibility than some other animals. Those who have full-time jobs can rest easy, knowing that their kitty can take care of itself for the most part. And when you do have extra time, cuddling up with your cat will feel better than ever.</p>
    </ListItem>
    <ListItem>
        <Heading color="var(--color-grey-2)" as="h2" variation="secondary">Cats are an eco-friendly pet choice</Heading>
        <p>Living a “green” lifestyle can be difficult, but a cat is a great choice for potential pet owners looking to stay eco-friendly. Studies show that the lifetime resources needed to feed and care for a cat have a smaller carbon footprint than for other animals. Plus, most cats prefer fish to beef or corn, which is better for the environment. You can feel good about owning your kitty.</p>
    </ListItem>
    <ListItem>
        <Heading color="var(--color-grey-2)" as="h2" variation="secondary">Cats can help reduce stress</Heading>
        <p>We all get stressed out, and people have many different ways of relieving their stress. Cat owners can reduce tensions by just stroking their furry friend’s head. Petting a cat releases endorphins into the brain, which makes you happier. Also, cats have the softest fur!

        There are so many more reasons that you should get a cat to fill your home with love. Check out your local shelter to find a kitty that really needs a home.</p>
    </ListItem>
</List>
}