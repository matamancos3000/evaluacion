import Header from '../../components/header';
import Footer from '../../components/footer';
import Layout from '../../hocs/layouts/Layout';

function login
() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <Layout>
                <main className="flex-grow overflow-auto">
                    <div className="relative max-w-7xl mx-auto z-10">
                        {/* contenido de la pagina de login desde cero */}
                      
                    </div>
                </main>
            </Layout>
            <Footer />
        </div>
    );
}
export default login
;
