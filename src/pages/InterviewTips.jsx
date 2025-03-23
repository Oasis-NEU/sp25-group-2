import NavBar from '../components/NavBar';
import Tips from '../components/Tips';

export default function InterviewTips() {
    return (
        <>
            <NavBar />
            <div className="interview-tips-container">
                <Tips />
            </div>
        </>
    );
}