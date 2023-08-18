import { styled } from "styled-components";

const LoadingWrapper = styled.div`
    .loading-page {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    }

    .loading-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    }

    .loading-spinner {
    border: 6px solid #f3f3f3;
    border-top: 6px solid #FF8C0A;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: spin 2s linear infinite;
    }

    @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
    }
`

function Loading () {
    return (
        <LoadingWrapper>
            <div className="loading-page">
                <div className="loading-container">
                <div className="loading-spinner"></div>
                <p>Loading...</p>
                </div>
            </div>
        </LoadingWrapper>
    )
}

export default Loading;