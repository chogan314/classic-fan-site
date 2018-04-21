import React, { Component } from 'react';
import ContentPreview from './ContentPreview';

class Grid extends Component {
    render() {
        return(
            <div id="grid-section">
                <div className="section-wrapper">
                    <div id="grid-container">
                        <div id="grid">
                            <ContentPreview type="ARTICLE"
                                            title="This Is an Example Article"
                                            author="Author Here"
                                            thumbnail_path="res/classic.jpg"
                                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mi est,
                                                ultricies ut efficitur quis, tempor ut risus. Vestibulum venenatis lectus quis
                                                lectus volutpat commodo."
                                            posted_at="February 1st, 2018" />

                            <ContentPreview type="NEWS"
                                            title="This Is Example News with a Really Really Long Name"
                                            author="Author Here"
                                            thumbnail_path="res/classic.jpg"
                                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mi est,
                                                ultricies ut efficitur quis, tempor ut risus. Vestibulum venenatis lectus quis
                                                lectus volutpat commodo."
                                            posted_at="February 1st, 2018" />

                            <ContentPreview type="GUIDE"
                                            title="This Is an Example Guide"
                                            author="Author Here"
                                            thumbnail_path="res/classic.jpg"
                                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mi est,
                                                ultricies ut efficitur quis, tempor ut risus. Vestibulum venenatis lectus quis
                                                lectus volutpat commodo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                Maecenas libero orci, porttitor id lectus et, suscipit viverra tellus. Suspendisse
                                                placerat lectus tellus, ac tincidunt magna sodales sed. Aenean risus libero, mattis
                                                eget suscipit sed, pharetra a nunc. Sed vel faucibus justo. Phasellus efficitur
                                                iaculis commodo."
                                            posted_at="February 1st, 2018" />

                            <ContentPreview type="GUIDE"
                                            title="This Is an Example Guide Again"
                                            author="Author Here"
                                            thumbnail_path="res/classic.jpg"
                                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mi est,
                                                ultricies ut efficitur quis, tempor ut risus. Vestibulum venenatis lectus quis
                                                lectus volutpat commodo."
                                            posted_at="February 1st, 2018" />

                            <ContentPreview type="NEWS"
                                            title="This Is Example News"
                                            author="Author Here"
                                            thumbnail_path="res/classic.jpg"
                                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mi est,
                                                ultricies ut efficitur quis, tempor ut risus. Vestibulum venenatis lectus quis
                                                lectus volutpat commodo."
                                            posted_at="February 1st, 2018" />

                            <ContentPreview type="ARTICLE"
                                            title="This Is an Example Article"
                                            author="Author Here"
                                            thumbnail_path="res/classic.jpg"
                                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mi est,
                                                ultricies ut efficitur quis, tempor ut risus. Vestibulum venenatis lectus quis
                                                lectus volutpat commodo."
                                            posted_at="February 1st, 2018" />

                            <ContentPreview type="ARTICLE"
                                            title="This Is an Example Article"
                                            author="Author Here"
                                            thumbnail_path="res/classic.jpg"
                                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mi est,
                                                ultricies ut efficitur quis, tempor ut risus. Vestibulum venenatis lectus quis
                                                lectus volutpat commodo."
                                            posted_at="February 1st, 2018" />

                            <ContentPreview type="NEWS"
                                            title="This Is Example News with a Really Really Long Name"
                                            author="Author Here"
                                            thumbnail_path="res/classic.jpg"
                                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mi est,
                                                ultricies ut efficitur quis, tempor ut risus. Vestibulum venenatis lectus quis
                                                lectus volutpat commodo."
                                            posted_at="February 1st, 2018" />

                            <ContentPreview type="GUIDE"
                                            title="This Is an Example Guide"
                                            author="Author Here"
                                            thumbnail_path="res/classic.jpg"
                                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mi est,
                                                ultricies ut efficitur quis, tempor ut risus. Vestibulum venenatis lectus quis
                                                lectus volutpat commodo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                Maecenas libero orci, porttitor id lectus et, suscipit viverra tellus. Suspendisse
                                                placerat lectus tellus, ac tincidunt magna sodales sed. Aenean risus libero, mattis
                                                eget suscipit sed, pharetra a nunc. Sed vel faucibus justo. Phasellus efficitur
                                                iaculis commodo."
                                            posted_at="February 1st, 2018" />

                            <ContentPreview type="GUIDE"
                                            title="This Is an Example Guide Again"
                                            author="Author Here"
                                            thumbnail_path="res/classic.jpg"
                                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mi est,
                                                ultricies ut efficitur quis, tempor ut risus. Vestibulum venenatis lectus quis
                                                lectus volutpat commodo."
                                            posted_at="February 1st, 2018" />

                            <ContentPreview type="NEWS"
                                            title="This Is Example News"
                                            author="Author Here"
                                            thumbnail_path="res/classic.jpg"
                                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mi est,
                                                ultricies ut efficitur quis, tempor ut risus. Vestibulum venenatis lectus quis
                                                lectus volutpat commodo."
                                            posted_at="February 1st, 2018" />

                            <ContentPreview type="ARTICLE"
                                            title="This Is an Example Article"
                                            author="Author Here"
                                            thumbnail_path="res/classic.jpg"
                                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mi est,
                                                ultricies ut efficitur quis, tempor ut risus. Vestibulum venenatis lectus quis
                                                lectus volutpat commodo."
                                            posted_at="February 1st, 2018" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Grid;