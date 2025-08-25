type PaginationProps = {
    isLoading: boolean;
    next: string | null;
    previous: string | null;
    fetchApi: (url: string) => void;
};

const Pagination = ({ isLoading, next, previous, fetchApi }: PaginationProps) => {
    // Function to extract page number from URL
    const getPageNumber = (url: string | null): number | null => {
        if (!url) return null;
        const params = new URLSearchParams(url.split("?")[1]);
        return Number(params.get("page"));
    };

    const nextPage = getPageNumber(next);
    const prevPage = getPageNumber(previous);

    // Calculate current page
    let currentPage = 1;
    if (prevPage) {
        currentPage = prevPage + 1;
    } else if (nextPage) {
        currentPage = nextPage - 1;
    }

    return (
        <div className="flex justify-center items-center gap-4 mt-4">
            <button
                onClick={() => previous && fetchApi(previous)}
                disabled={!previous || isLoading}
                className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
            >
                Previous
            </button>

            {/* ✅ Page Number Display */}
            <span className="text-lg font-medium">Page {currentPage}</span>

            <button
                onClick={() => next && fetchApi(next)}
                disabled={!next || isLoading}
                className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;
