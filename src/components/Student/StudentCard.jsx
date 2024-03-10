import React from 'react'
import { Link } from 'react-router-dom'
import './studentcard.css'

function ProjectCategories() {
    return (
        <div className="container2" >
            <h1>Project Categories</h1>
            <div className="category-box">
                <div className="category1">
                    
                    <h2>Artificial<br></br>Intelligence</h2>
                    <Link to="/ProjectCategories"><button>Explore </button></Link>
                </div>
                <div className="category2">
                    <h2>Machine<br></br>Learning</h2>
                    <Link to="/ProjectCategories"><button>Explore</button></Link>
                </div>
                <div className="category3">
                    <h2>Web<br></br> Development</h2>
                    <Link to="/ProjectCategories"><button>Explore </button></Link>
                </div>
                <div className="category4">
                    <h2>Quantum<br></br> Computing</h2>
                    <Link to="/ProjectCategories"><button>Explore </button></Link>
                </div>
                <div className="category5">
                    <h2>Signal<br></br>Processing </h2>
                    <Link to="/ProjectCategories"><button>Explore </button></Link>
                </div>
                <div className="category6">
                    <h2>Image<br></br>Processing </h2>
                    <Link to="/ProjectCategories"><button>Explore </button></Link>
                </div>
                <div className="category7">
                    <h2>Federated<br></br>Learning</h2>
                    <Link to="/ProjectCategories"><button>Explore </button></Link>
                </div>
                <div className="category8">
                    <h2>Federated<br></br>Learning</h2>
                    <Link to="/ProjectCategories"><button>Explore </button></Link>
                </div>
                <div className="category9">
                    <h2>Federated<br></br>Learning</h2>
                    <Link to="/ProjectCategories"><button>Explore </button></Link>
                </div>
                <div className="category10">
                    <h2>Federated<br></br>Learning</h2>
                    <Link to="/ProjectCategories"><button>Explore </button></Link>
                </div>
                <div className="category11">
                    <h2>Federated<br></br>Learning</h2>
                    <Link to="/ProjectCategories"><button>Explore </button></Link>
                </div>
                <div className="category12">
                    <h2>Federated<br></br>Learning</h2>
                    <Link to="/ProjectCategories"><button>Explore </button></Link>
                </div>
                {/* Add more category boxes as needed */}
            </div>
        </div>
    );
}

export default ProjectCategories;
