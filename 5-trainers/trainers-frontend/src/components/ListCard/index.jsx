import './index.css';

function ListCard({ children }) {

    // const children = props.children;
    // const { children } = props;

    return (
        <>
            <div>List card works!</div>
            {children}
        </>
    );
}

export { ListCard };