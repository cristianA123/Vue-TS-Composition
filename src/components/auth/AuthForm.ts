// import { useMapStore, usePlacesStore } from "@/composables";
// import mapboxgl from "mapbox-gl";
import { useAuth } from "@/composables";
import { defineComponent, onMounted, ref, watch } from "vue";
import { useRouter } from "vue-router";


export default defineComponent({
    name: 'AuthForm',
    setup() {
        const router = useRouter()
        // const mapElement = ref<HTMLDivElement>();
        // const  { userLocation, isUserLocationReady} =  usePlacesStore();
        // const { setMap } = useMapStore();

        const { login, authError, user } = useAuth();

        const email = ref<string>('c.quispe@culqi.com');
        const password = ref<string>('admin123');

        const onSubmit = async () => {
            await login(email.value, password.value)
        
        }

        // onMounted( () => {

        //     if ( isUserLocationReady.value )
        //         return initMap();
        //     console.log('nunca va a cargar')
            
        // })

        watch( user, () => {
            if ( user.value ) router.push('/home');
        },
        // { immediate: true }
         )

        return {
            email,
            password,
            authError,
            onSubmit,
            // userLocation,
            // isUserLocationReady,
            // mapElement
        }
    }
});