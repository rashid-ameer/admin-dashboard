import {
	BalanceCard,
	CardTemplate,
	Header,
	Sidebar,
	TransactionCard,
} from "./components";
import SubscriptionCard from "./components/SubscriptionCard/SubscriptionCard";

function App() {
	return (
		<div className="app">
			<div className="flex">
				<Sidebar />

				<div className="content">
					<Header />

					<main>
						<div className="main-content">
							<CardTemplate
								title={"Card"}
								cardBody={<BalanceCard />}
							/>

							<CardTemplate
								title={"All Transactions"}
								cardBody={<TransactionCard />}
							/>

							<CardTemplate
								title={"Subscriptions"}
								cardBody={<SubscriptionCard />}
							/>
						</div>
					</main>
				</div>
			</div>
		</div>
	);
}

export default App;
