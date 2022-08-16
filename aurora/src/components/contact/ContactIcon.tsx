import { ContactIconInterface } from './Contact';

export default function ({ icon }: { icon: ContactIconInterface }) {
    return <div>{icon.name}</div>;
}
