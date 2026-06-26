package za.ac.cput.nailbeautysalon.factory;

import za.ac.cput.nailbeautysalon.domain.Service;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

/**
 * author: Nandipha Galada
 * student number: 221225366
 * date: 23 June 2026
 * Test class for ServiceFactory
 */

public class ServiceFactoryTest {

    void testCreateValidService() {
        Service service = ServiceFactory.createService("S001", "Manicure", "Russian Manicure", "A russian manicure with nail poilsh", 170.0);

        assertNotNull(service);
        assertEquals("S001", service.getServiceId());
        assertEquals("Manicure", service.getServiceName());
        assertEquals("Russian Manicure", service.getCategory());
    }

    void testCreateMassageService() {
        Service service = ServiceFactory.createService("S002", "Massage", "Swedish Massage", "A relaxing Swedish massage", 350.0);

        assertNotNull(service);
        assertEquals("Massage", service.getCategory());
    }

    void testCreateInvalidService() {
        Service service = ServiceFactory.createService("", "", "", "", -100.0);

        assertEquals(null, service);
    }

}
