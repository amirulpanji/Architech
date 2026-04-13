import { useStore } from '../store/useStore';

export default function SelectedGPU() {
    const gpu = useStore((state) => state.selectedGPU);

    return (
        <div>
            <h2>GPU Terpilih</h2>
            {gpu ? (
                <p>{gpu.name} ({gpu.vram})</p>
            ) : (
                <p>Belum ada GPU yang dipilih.</p>
            )}
        </div>
    );
}