import React from 'react';

const MenuListTemplate = ({ form, childen }) => {
    return (
        <main>
            <div>맥도날드</div>
            <section>
                {childen}
            </section>
        </main>
    );
};

export default MenuListTemplate;