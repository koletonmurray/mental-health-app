import React from 'react';
import PageTitle from '../components/PageTitle';
import Card from '../components/Card';

function Resources() {

    return (
        <div>
            <PageTitle title={'Mental Health Resources'}/>
            {/* Flex row containing three cards */}
            <PageTitle title={'Favorites'}/>
            <div className="flex justify-center items-center gap-4 mb-4">
                <Card link={'https://www.churchofjesuschrist.org/get-help/mental-health?lang=eng'}>
                    Church of Jesus Christ Mental Health Resources
                </Card>

                <Card link={'https://www.churchofjesuschrist.org/study/manual/resource-booklet-adjusting-to-missionary-life?lang=eng'}>
                    Adjusting to Missionary Life
                </Card>

                <Card link={'https://www.churchofjesuschrist.org/study/ensign/2020/09/young-adults/for-missionaries-struggling-with-mental-health?lang=eng'}>
                    For Struggling Missionaries
                </Card>
            </div>
            {/* Additional rows with two resources each */}
            <div className="mb-4">
                <PageTitle subtitle={'Managing Stress'} />
                <div className="flex justify-center items-center gap-4">
                    
                </div>
            </div>

            <div className="mb-4">
                <PageTitle subtitle={'Exercising'} />
                <div className="flex justify-center items-center gap-4">
                {/* Add your cards here for exercising */}
                </div>
            </div>
                </div>
    );
}

export default Resources;
