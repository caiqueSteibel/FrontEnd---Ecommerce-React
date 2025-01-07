import FormInput from '../../utils/FormInput';

const Checkout = () => {
  return (
    <main className="bg-stone-200 h-[calc(100dvh-5rem)]">
      <p className="text-center text-2xl font-bold text-slate-950 pt-8">
        Finalizar Compra
      </p>
      <form className="grid grid-rows-[max-content_1fr_1fr_1fr_1fr_1fr] grid-cols-3 grid-flow-col gap-4 h-3/4 mt-5 px-8">
        <p className="text-center text-sm font-bold text-slate-950">
          Seus Dados
        </p>
        <FormInput
          fieldType="text"
          fieldName="Nome"
          id="name"
          placeholder="John"
          required
        />
        <p className="bg-blue-700">Elemento 2</p>
        <p className="bg-blue-700">Elemento 3</p>
        <p className="bg-blue-700">Elemento 4</p>

        <p className="text-center text-sm font-bold text-slate-950 row-start-1">
          Pagamento e Entrega
        </p>
        <p className="bg-blue-700">Elemento 5</p>
        <p className="text-center text-sm font-bold text-slate-950 row-start-1">
          Seus Produtos
        </p>
        <p className="bg-blue-700">Elemento 4</p>
      </form>
    </main>
  );
};

export default Checkout;
